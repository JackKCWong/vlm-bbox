export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

interface StatusBarProps {
  width: number;
  height: number;
  sizeBytes: number;
}

export function StatusBar({ width, height, sizeBytes }: StatusBarProps) {
  return (
    <div className="flex items-center justify-end gap-4 border-t border-zinc-200 bg-zinc-50 px-4 py-2 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
      <span>{width} x {height} px</span>
      <span>{formatFileSize(sizeBytes)}</span>
    </div>
  );
}