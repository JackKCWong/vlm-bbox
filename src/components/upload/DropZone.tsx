'use client';

import { useCallback, useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import { useAppStore } from '../../store/useAppStore';

const ACCEPTED_TYPES = {
  'application/pdf': ['.pdf'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/gif': ['.gif'],
  'image/webp': ['.webp'],
};

interface DropZoneProps {
  onFilesAccepted?: (files: File[]) => void;
}

export function DropZone({ onFilesAccepted }: DropZoneProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const addUploadedFile = useAppStore((state) => state.addUploadedFile);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      setErrorMessage(null);

      if (rejectedFiles.length > 0) {
        setErrorMessage('Some files were rejected. Only PDF and image files are accepted.');
        return;
      }

      const newFiles = acceptedFiles.map((file) => {
        const isPdf = file.type === 'application/pdf';
        return {
          id: `${Date.now()}-${file.name}`,
          name: file.name,
          file,
          type: (isPdf ? 'pdf' : 'image') as 'pdf' | 'image',
        };
      });

      newFiles.forEach((f) => addUploadedFile(f));
      onFilesAccepted?.(acceptedFiles);
    },
    [addUploadedFile, onFilesAccepted]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_TYPES,
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`flex min-h-[120px] cursor-pointer items-center justify-center rounded-lg border-2 border-dashed p-4 transition-colors ${
        isDragActive
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
          : 'border-zinc-300 bg-zinc-50 hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900'
      }`}
    >
      <input {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="text-blue-600 dark:text-blue-400">Drop the files here...</p>
        ) : (
          <>
            <p className="text-zinc-600 dark:text-zinc-400">
              Drag & drop PDF or image files here, or click to select
            </p>
            <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
              Accepts: PDF, JPG, PNG, GIF, WebP
            </p>
          </>
        )}
      </div>
      {errorMessage && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}