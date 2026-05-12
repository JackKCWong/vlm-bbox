# Task 3: PDF to Image Conversion

## Task Overview
Implement PDF to image conversion in the browser with local storage caching.

## Dependencies
Task 1: Project Setup, Task 2: File Upload Component

## External Libraries Required
| Library | Version | Purpose |
|---------|---------|---------|
| pdfjs-dist | ^4.0.379 | PDF rendering in browser |
| pdf-lib | ^1.17.1 | PDF metadata extraction |

## Pseudo Code - Main Flow
```
1. Create pdfToImages function
   - Load PDF using pdfjs-dist
   - Render each page to canvas at 2x resolution
   - Convert canvas to PNG blob
   - Return array of image blobs

2. Create usePdfCache hook
   - Check localStorage for cached images
   - If cache hit, return cached images
   - If cache miss, convert PDF and store in localStorage
   - Use file hash as cache key

3. Create convertAndCache function
   - Generate hash from file content
   - Check localStorage for existing cache
   - If not found, convert and store
   - Return image blobs array
```

## File Structure
```
/src/lib
  pdfConverter.ts
  pdfCache.ts
/hooks
  usePdfCache.ts
```

## Acceptance Criteria
- [ ] PDF files are converted to image blobs
- [ ] Images are cached in localStorage by file hash
- [ ] Cached images load without re-conversion
- [ ] Multiple PDF pages are handled correctly
- [ ] Canvas resolution is 2x for quality