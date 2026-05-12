'use client';

import { FileListSidebar } from '@/components/upload/FileListSidebar';
import { PreviewArea } from '@/components/preview/PreviewArea';

export default function Home() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="flex h-full w-[50%]">
        <FileListSidebar />
        <PreviewArea />
      </div>
      <div className="flex h-full w-[50%] items-center justify-center bg-zinc-50 dark:bg-zinc-950">
        <p className="text-zinc-400">Result section - 50%</p>
      </div>
    </div>
  );
}