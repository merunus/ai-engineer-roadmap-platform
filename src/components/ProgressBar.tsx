interface Props {
  value: number; // 0..100
  className?: string;
  showLabel?: boolean;
}

export function ProgressBar({ value, className, showLabel }: Props) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className={`flex items-center gap-2 ${className ?? ''}`}>
      <div
        className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-indigo-500 transition-[width] duration-300"
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs tabular-nums text-zinc-500 dark:text-zinc-400 w-9 text-right">
          {clamped}%
        </span>
      )}
    </div>
  );
}
