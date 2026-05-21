import { useMemo } from 'react';
import { roadmap } from './data/roadmap';
import { useProgress } from './hooks/useProgress';
import { useUIState } from './hooks/useUIState';
import { pct, statsForRoadmap } from './lib/progress';
import type { TaskProgress } from './types';
import { PhaseSection } from './components/PhaseSection';
import { ProgressBar } from './components/ProgressBar';
import { UpNextPanel } from './components/UpNextPanel';
import { FiltersBar } from './components/FiltersBar';
import { Toolbar } from './components/Toolbar';

export default function App() {
  const { progress, loaded: progressLoaded, toggleTask, resetAll, replaceAll } =
    useProgress();
  const {
    ui,
    loaded: uiLoaded,
    setFilter,
    setHideCompleted,
    setDark,
    toggleCollapsed,
    isCollapsed,
  } = useUIState();

  const overall = useMemo(
    () => statsForRoadmap(roadmap, progress),
    [progress],
  );

  if (!progressLoaded || !uiLoaded) {
    return (
      <div className="min-h-svh grid place-items-center text-sm text-zinc-500">
        Loading…
      </div>
    );
  }

  const overallPct = pct(overall.completedHours, overall.totalHours);

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 border-b border-zinc-200 dark:border-zinc-800 bg-white/85 dark:bg-zinc-950/85 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                AI Engineer Roadmap
              </h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Local progress tracker · front-end → AI application engineer
              </p>
            </div>
            <Toolbar
              progress={progress}
              dark={ui.dark}
              onSetDark={setDark}
              onReset={resetAll}
              onImport={replaceAll}
            />
          </div>

          <div className="mt-4 flex items-center gap-4">
            <ProgressBar value={overallPct} showLabel className="flex-1" />
            <div className="text-xs tabular-nums text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
              {overall.completedTasks}/{overall.totalTasks} tasks ·{' '}
              {overall.completedHours}/{overall.totalHours}h
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_18rem] gap-6">
          <div className="space-y-4">
            <FiltersBar
              filter={ui.filter}
              hideCompleted={ui.hideCompleted}
              onSetFilter={setFilter}
              onSetHideCompleted={setHideCompleted}
            />

            <div className="space-y-4">
              {roadmap.map((phase) => (
                <PhaseSection
                  key={phase.id}
                  phase={phase}
                  progress={progress}
                  onToggleTask={toggleTask}
                  filter={ui.filter}
                  hideCompleted={ui.hideCompleted}
                  isCollapsed={isCollapsed}
                  onToggleCollapsed={toggleCollapsed}
                />
              ))}
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <UpNextPanel
              roadmap={roadmap}
              progress={progress}
              onToggleTask={toggleTask}
            />
            <PhaseProgress progress={progress} />
          </aside>
        </div>

        <footer className="mt-10 text-center text-xs text-zinc-400 dark:text-zinc-600">
          Local-only · IndexedDB · {overall.totalHours}h curriculum
        </footer>
      </main>
    </div>
  );
}

function PhaseProgress({ progress }: { progress: Record<string, TaskProgress> }) {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        Phase progress
      </h3>
      <ul className="mt-3 space-y-3">
        {roadmap.map((phase) => {
          const s = statsForRoadmap([phase], progress);
          return (
            <li key={phase.id}>
              <div className="flex items-baseline justify-between gap-2">
                <div className="truncate text-xs text-zinc-700 dark:text-zinc-300">
                  {phase.title.replace(/^Phase \d+ — /, '')}
                </div>
                <div className="text-[10px] tabular-nums text-zinc-500 dark:text-zinc-400 shrink-0">
                  {s.completedHours}/{s.totalHours}h
                </div>
              </div>
              <ProgressBar
                className="mt-1"
                value={pct(s.completedHours, s.totalHours)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
