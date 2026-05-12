'use client';

interface ActionButtonsProps {
  onRun: () => void;
  onClear: () => void;
  isLoading: boolean;
}

export function ActionButtons({ onRun, onClear, isLoading }: ActionButtonsProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onRun}
        disabled={isLoading}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
      >
        {isLoading ? 'Running...' : 'Run'}
      </button>
      <button
        onClick={onClear}
        className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
      >
        Clear
      </button>
    </div>
  );
}