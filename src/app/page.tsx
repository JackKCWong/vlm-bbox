'use client';

import { useState, useMemo } from 'react';
import { FileListSidebar } from '@/components/upload/FileListSidebar';
import { PreviewArea } from '@/components/preview/PreviewArea';
import { PromptEditor } from '@/components/prompt/PromptEditor';
import { ActionButtons } from '@/components/prompt/ActionButtons';
import { useDetection } from '@/hooks/useDetection';
import { useAppStore } from '@/store/useAppStore';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const { detect, isLoading } = useDetection();
  const currentPage = useAppStore((state) => state.currentPage);
  const selectedFileId = useAppStore((state) => state.selectedFileId);
  const uploadedFiles = useAppStore((state) => state.uploadedFiles);
  const pdfImages = useAppStore((state) => state.pdfImages);

  const selectedFile = useMemo(
    () => uploadedFiles.find((f) => f.id === selectedFileId),
    [uploadedFiles, selectedFileId]
  );

  const handleRun = async () => {
    if (!selectedFile) return;

    let images: { blob: Blob; width: number; height: number }[] = [];

    if (selectedFile.type === 'pdf' && pdfImages.length > 0) {
      const pageImage = pdfImages[currentPage - 1];
      if (pageImage) {
        images = [{ blob: pageImage.blob, width: pageImage.width, height: pageImage.height }];
      }
    } else if (selectedFile.type === 'image') {
      images = [{ blob: selectedFile.file, width: 0, height: 0 }];
    }

    if (images.length > 0) {
      await detect(images, prompt);
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="flex h-full w-[50%]">
        <FileListSidebar />
        <PreviewArea />
      </div>
      <div className="flex h-full w-[50%] flex-col bg-zinc-50 dark:bg-zinc-950">
        <div className="flex items-center gap-4 border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Prompt</span>
          <ActionButtons
            onRun={handleRun}
            onClear={() => setPrompt('')}
            isLoading={isLoading}
          />
        </div>
        <div className="flex-1 overflow-hidden">
          <PromptEditor value={prompt} onChange={setPrompt} />
        </div>
      </div>
    </div>
  );
}