'use client';

interface PageNavigatorProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

export function PageNavigator({ currentPage, totalPages, onPrev, onNext }: PageNavigatorProps) {
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <div className="flex items-center justify-center gap-4 p-2">
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className="rounded-md border border-zinc-300 bg-white px-3 py-1 text-sm font-medium transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-700"
      >
        &lt;
      </button>
      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="rounded-md border border-zinc-300 bg-white px-3 py-1 text-sm font-medium transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-700"
      >
        &gt;
      </button>
    </div>
  );
}