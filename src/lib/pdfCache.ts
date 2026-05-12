import { PDFPageImage } from './pdfConverter';

const CACHE_PREFIX = 'pdf_cache_';
const CACHE_VERSION = 'v1';

async function generateFileHash(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

function getCacheKey(fileHash: string): string {
  return `${CACHE_PREFIX}${CACHE_VERSION}_${fileHash}`;
}

export async function getCachedImages(
  file: File
): Promise<PDFPageImage[] | null> {
  try {
    const hash = await generateFileHash(file);
    const cacheKey = getCacheKey(hash);
    const cached = localStorage.getItem(cacheKey);

    if (!cached) {
      return null;
    }

    const parsed = JSON.parse(cached);
    const images: PDFPageImage[] = [];

    for (const item of parsed) {
      const response = await fetch(item.dataUrl);
      const blob = await response.blob();
      images.push({
        blob,
        width: item.width,
        height: item.height,
        pageNum: item.pageNum,
      });
    }

    return images;
  } catch {
    return null;
  }
}

export async function setCachedImages(
  file: File,
  images: PDFPageImage[]
): Promise<void> {
  const hash = await generateFileHash(file);
  const cacheKey = getCacheKey(hash);

  const items = await Promise.all(
    images.map(async (img) => {
      const dataUrl = await blobToDataUrl(img.blob);
      return {
        dataUrl,
        width: img.width,
        height: img.height,
        pageNum: img.pageNum,
      };
    })
  );

  localStorage.setItem(cacheKey, JSON.stringify(items));
}

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}