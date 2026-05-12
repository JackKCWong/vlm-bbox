'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { BoundingBox as BoundingBoxType } from '@/lib/types';
import { BoundingBoxOverlay } from '@/components/bbox/BoundingBoxOverlay';

interface ImagePreviewProps {
  src: string | Blob;
  alt?: string;
  boundingBoxes?: BoundingBoxType[];
}

export function ImagePreview({ src, alt = 'Preview', boundingBoxes = [] }: ImagePreviewProps) {
  const [objectUrl, setObjectUrl] = useState<string>('');
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (src instanceof Blob) {
      const url = URL.createObjectURL(src);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setObjectUrl(url);
      return () => URL.revokeObjectURL(url);
    } else if (typeof src === 'string') {
      setObjectUrl(src);
    }
  }, [src]);

  const handleLoad = useCallback(() => {
    if (imgRef.current) {
      setImgSize({
        width: imgRef.current.naturalWidth,
        height: imgRef.current.naturalHeight,
      });
    }
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      img.addEventListener('load', handleLoad);
      return () => img.removeEventListener('load', handleLoad);
    }
  }, [handleLoad, objectUrl]);

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
        ref={imgRef}
        src={objectUrl}
        alt={alt}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
        }}
      />
      {imgSize.width > 0 && boundingBoxes.length > 0 && (
        <BoundingBoxOverlay
          boxes={boundingBoxes}
          imgWidth={imgSize.width}
          imgHeight={imgSize.height}
        />
      )}
    </div>
  );
}