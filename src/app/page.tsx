'use client';

import { useState } from 'react';
import { FileListSidebar } from '@/components/upload/FileListSidebar';
import { PreviewArea } from '@/components/preview/PreviewArea';
import { PromptEditor } from '@/components/prompt/PromptEditor';
import { ActionButtons } from '@/components/prompt/ActionButtons';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
            onRun={() => setIsLoading(true)}
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