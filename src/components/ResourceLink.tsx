import type { Resource, ResourceKind } from '../types';

const KIND_STYLES: Record<ResourceKind, string> = {
  docs:    'bg-sky-100    text-sky-800    dark:bg-sky-900/40    dark:text-sky-200',
  video:   'bg-rose-100   text-rose-800   dark:bg-rose-900/40   dark:text-rose-200',
  course:  'bg-amber-100  text-amber-800  dark:bg-amber-900/40  dark:text-amber-200',
  article: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
  tool:    'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-200',
  repo:    'bg-zinc-200   text-zinc-800   dark:bg-zinc-800      dark:text-zinc-200',
};

export function ResourceLink({ resource }: { resource: Resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded border border-zinc-200 dark:border-zinc-800 px-2 py-1 text-xs hover:bg-zinc-50 dark:hover:bg-zinc-900"
    >
      <span
        className={`rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${KIND_STYLES[resource.kind]}`}
      >
        {resource.kind}
      </span>
      <span className="text-zinc-700 dark:text-zinc-300 truncate max-w-[28ch]">
        {resource.label}
      </span>
    </a>
  );
}
