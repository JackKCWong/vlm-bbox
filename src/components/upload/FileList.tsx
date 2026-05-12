'use client';

import { useAppStore } from '../../store/useAppStore';

export function FileList() {
  const uploadedFiles = useAppStore((state) => state.uploadedFiles);
  const selectedFileId = useAppStore((state) => state.selectedFileId);
  const setSelectedFileId = useAppStore((state) => state.setSelectedFileId);
  const removeUploadedFile = useAppStore((state) => state.removeUploadedFile);

  if (uploadedFiles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-zinc-400 dark:text-zinc-500">
        <svg
          className="mb-2 h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <p className="text-sm">No files uploaded</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 overflow-y-auto">
      {uploadedFiles.map((file) => (
        <div
          key={file.id}
          className={`group flex items-center justify-between rounded px-3 py-2 text-sm transition-colors ${
            selectedFileId === file.id
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
              : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'
          }`}
        >
          <button
            type="button"
            onClick={() => setSelectedFileId(file.id)}
            className="flex flex-1 items-center gap-2 text-left"
          >
            <span className="text-xs text-zinc-400 dark:text-zinc-600">
              {file.type === 'pdf' ? '📄' : '🖼️'}
            </span>
            <span className="truncate">{file.name}</span>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              removeUploadedFile(file.id);
            }}
            className="ml-2 rounded p-1 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600 dark:hover:bg-zinc-700"
            aria-label={`Remove ${file.name}`}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}