'use client';

import { DropZone } from './DropZone';
import { FileList } from './FileList';

export function FileListSidebar() {
  return (
    <div className="flex h-full w-[20%] min-w-[180px] flex-col gap-3 border-r border-zinc-200 bg-zinc-50 px-3 py-3 dark:border-zinc-800 dark:bg-zinc-900">
      <DropZone />
      <div className="flex-1 overflow-hidden">
        <FileList />
      </div>
    </div>
  );
}