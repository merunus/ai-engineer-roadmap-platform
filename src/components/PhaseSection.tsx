import type { Phase, TaskProgress } from '../types';
import { pct, statsForPhase } from '../lib/progress';
import { ProgressBar } from './ProgressBar';
import { ModuleSection } from './ModuleSection';

interface Props {
  phase: Phase;
  progress: Record<string, TaskProgress>;
  onToggleTask: (taskId: string) => void;
  filter: 'all' | 'practice' | 'theory';
  hideCompleted: boolean;
  isCollapsed: (id: string, defaultCollapsed: boolean) => boolean;
  onToggleCollapsed: (id: string) => void;
}

export function PhaseSection({
  phase,
  progress,
  onToggleTask,
  filter,
  hideCompleted,
  isCollapsed,
  onToggleCollapsed,
}: Props) {
  const stats = statsForPhase(phase, progress);
  const collapsed = isCollapsed(phase.id, phase.order > 0);

  return (
    <section className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm">
      <header className="px-5 py-4">
        <button
          type="button"
          onClick={() => onToggleCollapsed(phase.id)}
          className="flex w-full items-start gap-3 text-left"
        >
          <span
            className={`mt-1.5 text-zinc-400 transition-transform ${collapsed ? '' : 'rotate-90'}`}
            aria-hidden
          >
            ▸
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {phase.title}
              </h2>
              <span className="text-xs tabular-nums text-zinc-500 dark:text-zinc-400 shrink-0">
                {stats.completedTasks}/{stats.totalTasks} tasks · {stats.completedHours}/{stats.totalHours}h
              </span>
            </div>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {phase.summary}
            </p>
            <ProgressBar
              className="mt-3"
              value={pct(stats.completedHours, stats.totalHours)}
              showLabel
            />
          </div>
        </button>
      </header>

      {!collapsed && (
        <div className="space-y-3 px-5 pb-5">
          {phase.modules.map((mod) => (
            <ModuleSection
              key={mod.id}
              module={mod}
              progress={progress}
              onToggleTask={onToggleTask}
              filter={filter}
              hideCompleted={hideCompleted}
              collapsed={isCollapsed(mod.id, false)}
              onToggleCollapsed={() => onToggleCollapsed(mod.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
