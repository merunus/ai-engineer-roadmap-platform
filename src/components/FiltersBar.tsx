import type { UIState } from '../types';

interface Props {
  filter: UIState['filter'];
  hideCompleted: boolean;
  onSetFilter: (f: UIState['filter']) => void;
  onSetHideCompleted: (v: boolean) => void;
}

const OPTIONS: { value: UIState['filter']; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'practice', label: 'Practice' },
  { value: 'theory', label: 'Theory' },
];

export function FiltersBar({
  filter,
  hideCompleted,
  onSetFilter,
  onSetHideCompleted,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="inline-flex rounded-md border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSetFilter(opt.value)}
            className={[
              'px-3 py-1 text-xs',
              filter === opt.value
                ? 'bg-indigo-600 text-white'
                : 'bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900',
            ].join(' ')}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <label className="inline-flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer">
        <input
          type="checkbox"
          checked={hideCompleted}
          onChange={(e) => onSetHideCompleted(e.target.checked)}
          className="size-4 accent-indigo-600"
        />
        Hide completed
      </label>
    </div>
  );
}
