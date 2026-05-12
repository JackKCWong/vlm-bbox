import { PDFPageImage } from './pdfConverter';

const memoryCache = new Map<string, PDFPageImage[]>();

export function getCachedImages(file: File): PDFPageImage[] | null {
  const hash = getFileHash(file);
  return memoryCache.get(hash) || null;
}

export function setCachedImages(file: File, images: PDFPageImage[]): void {
  const hash = getFileHash(file);
  memoryCache.set(hash, images);
}

function getFileHash(file: File): string {
  return `${file.name}_${file.size}_${file.lastModified}`;
}