import { useRef, useState } from 'react';
import type { TaskProgress } from '../types';
import { buildExport, parseImport } from '../db/db';

interface Props {
  progress: Record<string, TaskProgress>;
  dark: boolean;
  onSetDark: (v: boolean) => void;
  onReset: () => Promise<void>;
  onImport: (items: TaskProgress[]) => Promise<void>;
}

export function Toolbar({
  progress,
  dark,
  onSetDark,
  onReset,
  onImport,
}: Props) {
  const fileInput = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  function handleExport() {
    const data = buildExport(progress);
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const ts = new Date().toISOString().slice(0, 10);
    a.download = `ai-roadmap-progress-${ts}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleImportFile(file: File) {
    try {
      const text = await file.text();
      const items = parseImport(text);
      if (
        !window.confirm(
          `Replace your current progress with ${items.length} entries from this file? This cannot be undone.`,
        )
      ) {
        return;
      }
      await onImport(items);
      setMessage(`Imported ${items.length} entries.`);
    } catch (e) {
      setMessage(`Import failed: ${(e as Error).message}`);
    } finally {
      setTimeout(() => setMessage(null), 4000);
    }
  }

  async function handleReset() {
    if (
      !window.confirm(
        'Reset ALL progress? This wipes every checkbox and timestamp. Cannot be undone.',
      )
    )
      return;
    await onReset();
    setMessage('Progress reset.');
    setTimeout(() => setMessage(null), 3000);
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={handleExport}
        className="rounded-md border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs hover:bg-zinc-50 dark:hover:bg-zinc-900"
      >
        Export
      </button>
      <button
        type="button"
        onClick={() => fileInput.current?.click()}
        className="rounded-md border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs hover:bg-zinc-50 dark:hover:bg-zinc-900"
      >
        Import
      </button>
      <input
        ref={fileInput}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) void handleImportFile(f);
          e.target.value = '';
        }}
      />
      <button
        type="button"
        onClick={handleReset}
        className="rounded-md border border-rose-200 dark:border-rose-900/50 px-3 py-1 text-xs text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/40"
      >
        Reset
      </button>
      <button
        type="button"
        onClick={() => onSetDark(!dark)}
        className="rounded-md border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs hover:bg-zinc-50 dark:hover:bg-zinc-900"
        aria-label="Toggle dark mode"
      >
        {dark ? 'Light' : 'Dark'}
      </button>
      {message && (
        <span className="text-xs text-zinc-500 dark:text-zinc-400">{message}</span>
      )}
    </div>
  );
}
