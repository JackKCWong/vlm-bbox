'use client';

import { useEffect, useState } from 'react';

interface ImagePreviewProps {
  src: string | Blob;
  alt?: string;
}

export function ImagePreview({ src, alt = 'Preview' }: ImagePreviewProps) {
  const [objectUrl, setObjectUrl] = useState<string>('');

  useEffect(() => {
    let url = '';
    if (src instanceof Blob) {
      url = URL.createObjectURL(src);
    } else if (typeof src === 'string') {
      url = src;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setObjectUrl(url);
    return () => {
      if (url && src instanceof Blob) URL.revokeObjectURL(url);
    };
  }, [src]);

  if (!objectUrl) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-zinc-100 dark:bg-zinc-900">
        <p className="text-zinc-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
      <img
        src={objectUrl}
        alt={alt}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  );
}