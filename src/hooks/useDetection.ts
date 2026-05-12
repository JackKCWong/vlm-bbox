import { useState, useCallback } from 'react';
import axios from 'axios';
import { useAppStore } from '@/store/useAppStore';
import { BoundingBox } from '@/lib/types';

interface UseDetectionReturn {
  detect: (images: { blob: Blob; width: number; height: number }[], prompt: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  clearBBoxes: () => void;
}

export function useDetection(): UseDetectionReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const addBBox = useAppStore((state) => state.addBBox);
  const clearBBoxesStore = useAppStore((state) => state.clearBBoxes);
  const currentPage = useAppStore((state) => state.currentPage);

  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const detect = useCallback(
    async (images: { blob: Blob; width: number; height: number }[], prompt: string) => {
      setIsLoading(true);
      setError(null);

      try {
        const formData = new FormData();
        formData.append('prompt', prompt);

        for (let i = 0; i < images.length; i++) {
          const base64 = await blobToBase64(images[i].blob);
          const response = await fetch(base64);
          const blob = await response.blob();
          formData.append(`image_${i}`, blob, `image_${i}.png`);
          formData.append(`width_${i}`, images[i].width.toString());
          formData.append(`height_${i}`, images[i].height.toString());
        }

        const result = await axios.post('/api/detect', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        const data = result.data;

        if (data.error) {
          setError(data.error);
          return;
        }

        if (Array.isArray(data.results)) {
          for (const res of data.results) {
            if (Array.isArray(res.boxes)) {
              for (const box of res.boxes) {
                const bbox: BoundingBox = {
                  x: box.x,
                  y: box.y,
                  width: box.width,
                  height: box.height,
                  label: box.label || '',
                  confidence: box.confidence,
                  page: res.imageIndex === currentPage - 1 ? currentPage : 1,
                };
                addBBox(bbox);
              }
            }
          }
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.error || err.message);
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Detection failed');
        }
      } finally {
        setIsLoading(false);
      }
    },
    [addBBox, currentPage]
  );

  const clearBBoxes = useCallback(() => {
    clearBBoxesStore();
  }, [clearBBoxesStore]);

  return { detect, isLoading, error, clearBBoxes };
}