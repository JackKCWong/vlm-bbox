# Task 6: PDF Conversion and Caching

## Task Overview
Convert PDF pages to images in the browser using PDF.js and cache the converted images in localStorage for faster subsequent access.

## Dependencies
- Task 1: Project Setup and Dependencies
- Task 3: File Upload Component
- Task 5: Image Preview

## External Libraries Required
| Library | Version | Purpose |
|---------|---------|---------|
| pdfjs-dist | ^4.x | PDF rendering and conversion to images |

## Pseudo Code - Main Flow

```
1. Create pdfUtils.ts with conversion functions
2. Function: convertPdfToImages(file, pageNum?)
   - Load PDF using pdfjs-dist
   - Render each page to canvas at 2x resolution
   - Convert canvas to data URL (PNG/JPEG)
   - Return array of image data URLs
3. Function: cacheImages(fileId, images)
   - Store images in localStorage with fileId key
   - Handle storage limits gracefully
4. Function: getCachedImages(fileId)
   - Retrieve cached images from localStorage
   - Return null if not found or expired
5. On PDF file select:
   - Check cache first
   - If not cached, convert all pages
   - Store in cache for future use
6. Handle conversion errors gracefully
```

## File Structure
```
/lib
  /pdfUtils.ts        - PDF conversion and caching utilities
```

## Acceptance Criteria
- [ ] PDF pages converted to images without errors
- [ ] Images cached in localStorage with file identifier
- [ ] Subsequent file selection loads from cache
- [ ] Cache entries expire after 24 hours
- [ ] Large PDFs handled with progress indication
- [ ] Conversion errors handled gracefully