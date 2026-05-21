import type { Module, TaskProgress } from '../types';
import { pct, statsForModule } from '../lib/progress';
import { ProgressBar } from './ProgressBar';
import { TaskCard } from './TaskCard';

interface Props {
  module: Module;
  progress: Record<string, TaskProgress>;
  onToggleTask: (taskId: string) => void;
  filter: 'all' | 'practice' | 'theory';
  hideCompleted: boolean;
  collapsed: boolean;
  onToggleCollapsed: () => void;
}

export function ModuleSection({
  module,
  progress,
  onToggleTask,
  filter,
  hideCompleted,
  collapsed,
  onToggleCollapsed,
}: Props) {
  const stats = statsForModule(module, progress);
  const tasksVisible = module.tasks.filter((t) => {
    if (filter !== 'all' && t.type !== filter) return false;
    if (hideCompleted && progress[t.id]?.completed) return false;
    return true;
  });

  return (
    <section className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40">
      <header className="px-4 py-3">
        <button
          type="button"
          onClick={onToggleCollapsed}
          className="flex w-full items-start gap-3 text-left"
        >
          <span
            className={`mt-1 text-zinc-400 transition-transform ${collapsed ? '' : 'rotate-90'}`}
            aria-hidden
          >
            ▸
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {module.title}
              </h3>
              <span className="text-xs tabular-nums text-zinc-500 dark:text-zinc-400 shrink-0">
                {stats.completedTasks}/{stats.totalTasks} · {stats.completedHours}/{stats.totalHours}h
              </span>
            </div>
            <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
              {module.goal}
            </p>
            <ProgressBar
              className="mt-2"
              value={pct(stats.completedHours, stats.totalHours)}
            />
          </div>
        </button>
      </header>

      {!collapsed && (
        <div className="space-y-1.5 px-4 pb-4">
          {tasksVisible.length === 0 ? (
            <div className="text-xs text-zinc-500 dark:text-zinc-400 italic py-2">
              No tasks match the current filter.
            </div>
          ) : (
            tasksVisible.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                completed={!!progress[task.id]?.completed}
                onToggle={() => onToggleTask(task.id)}
              />
            ))
          )}
        </div>
      )}
    </section>
  );
}
