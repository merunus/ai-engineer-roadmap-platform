import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Task } from '../types';
import { ResourceLink } from './ResourceLink';

interface Props {
  task: Task;
  completed: boolean;
  onToggle: () => void;
}

export function TaskCard({ task, completed, onToggle }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={[
        'rounded-lg border transition-colors',
        completed
          ? 'border-emerald-200/60 bg-emerald-50/40 dark:border-emerald-900/30 dark:bg-emerald-950/20'
          : 'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900',
      ].join(' ')}
    >
      <div className="flex items-center gap-3 px-3 py-2.5">
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          className="size-4 shrink-0 cursor-pointer accent-indigo-600"
          aria-label={`Mark "${task.title}" complete`}
        />
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex flex-1 items-center gap-2 text-left min-w-0"
        >
          <span
            className={[
              'flex-1 truncate text-sm',
              completed
                ? 'line-through text-zinc-500 dark:text-zinc-400'
                : 'text-zinc-900 dark:text-zinc-100',
            ].join(' ')}
          >
            {task.title}
          </span>
          <TypeBadge type={task.type} />
          <span className="text-xs tabular-nums text-zinc-500 dark:text-zinc-400 shrink-0">
            {task.estimatedHours}h
          </span>
          <span
            className={`shrink-0 text-zinc-400 transition-transform ${open ? 'rotate-90' : ''}`}
            aria-hidden
          >
            ▸
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-200 dark:border-zinc-800 px-3 py-3 space-y-3">
          <div className="md">
            <ReactMarkdown>{task.description}</ReactMarkdown>
          </div>

          {task.deliverable && (
            <div className="rounded border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/60 dark:bg-indigo-950/30 px-3 py-2">
              <div className="text-[11px] font-medium uppercase tracking-wide text-indigo-700 dark:text-indigo-300 mb-1">
                Deliverable
              </div>
              <div className="md">
                <ReactMarkdown>{task.deliverable}</ReactMarkdown>
              </div>
            </div>
          )}

          {task.resources.length > 0 && (
            <div>
              <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-1.5">
                Resources
              </div>
              <div className="flex flex-wrap gap-1.5">
                {task.resources.map((r) => (
                  <ResourceLink key={r.url} resource={r} />
                ))}
              </div>
            </div>
          )}

          <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600">
            id: {task.id}
          </div>
        </div>
      )}
    </div>
  );
}

function TypeBadge({ type }: { type: Task['type'] }) {
  const cls =
    type === 'practice'
      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200'
      : 'bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300';
  return (
    <span
      className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${cls}`}
    >
      {type}
    </span>
  );
}
