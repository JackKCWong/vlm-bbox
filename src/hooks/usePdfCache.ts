import { useState, useCallback } from 'react';
import { PDFPageImage, pdfToImages } from '@/lib/pdfConverter';
import { getCachedImages, setCachedImages } from '@/lib/pdfCache';

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

  const generateHash = async (file: File): Promise<string> => {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  };

  const loadPdf = useCallback(async (file: File) => {
    setIsLoading(true);
    setError(null);

    try {
      const hash = await generateHash(file);

      if (hash === currentFileHash && images.length > 0) {
        setIsLoading(false);
        return;
      }

      let cachedImages = await getCachedImages(file);

      if (!cachedImages) {
        cachedImages = await pdfToImages(file, 2);
        await setCachedImages(file, cachedImages);
      }

      setImages(cachedImages);
      setCurrentFileHash(hash);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load PDF');
      setImages([]);
    } finally {
      setIsLoading(false);
    }
  }, [currentFileHash, images.length]);

  return { images, isLoading, error, loadPdf };
}