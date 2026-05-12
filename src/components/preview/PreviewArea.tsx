'use client';

import { useEffect, useMemo, useState } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { usePdfCache } from '@/hooks/usePdfCache';
import { ImagePreview } from './ImagePreview';
import { PageNavigator } from './PageNavigator';
import { StatusBar } from './StatusBar';

function ImagePreviewWithDims({ file, objectUrl }: { file: File; objectUrl: string }) {
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.src = objectUrl;
  }, [objectUrl]);

  return <ImagePreview src={objectUrl} alt={file.name} />;
}

function StatusBarWithDims({ file }: { file: File }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    };
    const objectUrl = URL.createObjectURL(file);
    img.src = objectUrl;
  }, [file]);

  return <StatusBar width={dimensions.width} height={dimensions.height} sizeBytes={file.size} />;
}

export function PreviewArea() {
  const selectedFileId = useAppStore((state) => state.selectedFileId);
  const uploadedFiles = useAppStore((state) => state.uploadedFiles);
  const currentPage = useAppStore((state) => state.currentPage);
  const setCurrentPage = useAppStore((state) => state.setCurrentPage);
  const setTotalPages = useAppStore((state) => state.setTotalPages);

  const { images, isLoading, error, loadPdf } = usePdfCache();

  const selectedFile = useMemo(
    () => uploadedFiles.find((f) => f.id === selectedFileId),
    [uploadedFiles, selectedFileId]
  );

  useEffect(() => {
    if (selectedFile?.type === 'pdf' && selectedFile.file) {
      loadPdf(selectedFile.file);
    }
  }, [selectedFile, loadPdf]);

  useEffect(() => {
    if (images.length > 0) {
      setTotalPages(images.length);
      if (currentPage > images.length) {
        setCurrentPage(images.length);
      }
    }
  }, [images.length, currentPage, setTotalPages, setCurrentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < images.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (!selectedFile) {
    return (
      <div className="flex h-full items-center justify-center bg-zinc-100 dark:bg-zinc-900">
        <p className="text-zinc-400">No file selected</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center bg-zinc-100 dark:bg-zinc-900">
        <p className="text-zinc-400">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center bg-zinc-100 dark:bg-zinc-900">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  const isPdf = selectedFile.type === 'pdf';
  const currentImage = isPdf && images.length > 0 ? images[currentPage - 1] : null;

  if (isPdf && currentImage) {
    return (
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-hidden">
          <ImagePreview
            src={currentImage.blob}
            alt={`Page ${currentPage}`}
          />
        </div>
        <PageNavigator
          currentPage={currentPage}
          totalPages={images.length}
          onPrev={handlePrevPage}
          onNext={handleNextPage}
        />
        <StatusBar
          width={currentImage.width}
          height={currentImage.height}
          sizeBytes={selectedFile.file.size}
        />
      </div>
    );
  }

  if (!isPdf && selectedFile) {
    const objectUrl = URL.createObjectURL(selectedFile.file);
    return (
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-hidden">
          <ImagePreviewWithDims file={selectedFile.file} objectUrl={objectUrl} />
        </div>
        <StatusBarWithDims file={selectedFile.file} />
      </div>
    );
  }

  return (
    <div className="flex h-full items-center justify-center bg-zinc-100 dark:bg-zinc-900">
      <p className="text-zinc-400">Unable to preview</p>
    </div>
  );
}