import { useState, useCallback } from 'react';
import { PDFPageImage, pdfToImages } from '@/lib/pdfConverter';
import { getCachedImages, setCachedImages } from '@/lib/pdfCache';
import { useAppStore } from '@/store/useAppStore';

interface UsePdfCacheReturn {
  images: PDFPageImage[];
  isLoading: boolean;
  error: string | null;
  loadPdf: (file: File) => Promise<void>;
}

export function usePdfCache(): UsePdfCacheReturn {
  const [images, setImages] = useState<PDFPageImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentFileHash, setCurrentFileHash] = useState<string | null>(null);
  const setPdfImages = useAppStore((state) => state.setPdfImages);

  const getFileHash = (file: File): string => {
    return `${file.name}_${file.size}_${file.lastModified}`;
  };

  const loadPdf = useCallback(async (file: File) => {
    setIsLoading(true);
    setError(null);

    try {
      const hash = getFileHash(file);

      if (hash === currentFileHash && images.length > 0) {
        setIsLoading(false);
        return;
      }

      let cachedImages = getCachedImages(file);

      if (!cachedImages) {
        cachedImages = await pdfToImages(file, 2);
        setCachedImages(file, cachedImages);
      }

      setImages(cachedImages);
      setCurrentFileHash(hash);
      setPdfImages(cachedImages);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load PDF');
      setImages([]);
    } finally {
      setIsLoading(false);
    }
  }, [currentFileHash, images.length, setPdfImages]);

  return { images, isLoading, error, loadPdf };
}