# Task 5: PDF to Image Conversion

## Task Overview
Implement PDF to image conversion in the browser using pdf.js library. Cache converted images for faster subsequent loads.

## Dependencies
- Task 1: pdfjs-dist must be installed

## External Libraries Required
| Library | Purpose |
|---------|---------|
| pdfjs-dist | PDF parsing and rendering |
| (browser built-in) | Canvas API for image generation |

## Pseudo Code - Main Flow

### Module: pdfConverter.ts
```typescript
interface ConvertedPage {
  pageNumber: number;
  imageData: string;  // base64 data URL
  width: number;
  height: number;
}

interface PDFConverterResult {
  pages: ConvertedPage[];
  totalPages: number;
}

// 1. Load PDF document using pdfjs.getDocument()
// 2. Iterate through all pages
// 3. For each page:
   - Render to canvas using page.render()
   - canvas.toDataURL('image/png') to get base64
   - Store dimensions and image data
// 4. Return array of converted pages
```

### Cache Strategy
```typescript
// Store in localStorage with structure:
{
  "fileHash": {
    lastAccessed: timestamp,
    pages: ConvertedPage[]
  }
}

// Hash calculation: MD5 of file name + size + last modified
// Key format: "pdf_cache_${fileHash}"

// Check cache before conversion:
// 1. Generate hash from file metadata
// 2. Look up in localStorage
// 3. If found and not expired (>24h), return cached
// 4. If not found or expired, convert and store
```

### Error Handling
- Invalid PDF structure
- Password-protected PDFs (reject)
- Corrupted PDF files
- Page render failures

## File Structure
```
app/lib/
  pdfConverter.ts    # PDF conversion logic
  cacheManager.ts    # localStorage cache utilities
```

## Acceptance Criteria
- [ ] Converts PDF pages to images in browser
- [ ] Returns base64 data URLs for each page
- [ ] Caches converted images in localStorage
- [ ] Loads from cache when available
- [ ] Handles multi-page PDFs correctly
- [ ] Reports progress for large PDFs (optional)
- [ ] Handles password-protected PDFs gracefully
- [ ] Cleans up old cache entries (>7 days)