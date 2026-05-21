import type { Phase, TaskProgress } from '../types';
import { nextUpTasks } from '../lib/progress';

interface Props {
  roadmap: Phase[];
  progress: Record<string, TaskProgress>;
  onToggleTask: (taskId: string) => void;
}

export function UpNextPanel({ roadmap, progress, onToggleTask }: Props) {
  const next = nextUpTasks(roadmap, progress, 5);

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        Up next
      </h3>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
        Your next {next.length} task{next.length === 1 ? '' : 's'} in order.
      </p>
      {next.length === 0 ? (
        <div className="mt-3 text-sm text-emerald-700 dark:text-emerald-400">
          You shipped everything. Go get the job.
        </div>
      ) : (
        <ol className="mt-3 space-y-2">
          {next.map((f) => (
            <li
              key={f.task.id}
              className="flex items-start gap-2 text-sm leading-snug"
            >
              <input
                type="checkbox"
                checked={false}
                onChange={() => onToggleTask(f.task.id)}
                className="mt-0.5 size-4 shrink-0 cursor-pointer accent-indigo-600"
                aria-label={`Mark "${f.task.title}" complete`}
              />
              <div className="min-w-0">
                <div className="truncate text-zinc-900 dark:text-zinc-100">
                  {f.task.title}
                </div>
                <div className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                  {f.moduleTitle} · {f.task.estimatedHours}h · {f.task.type}
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
