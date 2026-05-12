# Task 5: Image Preview

## Task Overview
Display the selected image (or PDF pages) in the preview area with navigation controls for PDF pages.

## Dependencies
- Task 2: UI Layout
- Task 4: File List Sidebar

## External Libraries Required
None

## Pseudo Code - Main Flow

```
1. Create ImagePreview component
2. For image files:
   - Display image using <img> tag
   - Fit to container with proper scaling
3. For PDF files:
   - Use pre-converted images from cache
   - Display current page based on page state
4. Add navigator UI:
   - Display "Page X of Y" label
   - "<" button for previous page
   - ">" button for next page
   - Disable buttons at boundaries
5. Handle loading state while PDF converts
6. Add bbox overlay layer on top of image
```

## File Structure
```
/components
  /ImagePreview.tsx   - Image preview with navigator
```

## Acceptance Criteria
- [ ] Image files displayed correctly with proper scaling
- [ ] PDF pages displayed using converted images
- [ ] Page navigator shows current page and total pages
- [ ] Prev/Next buttons work and are disabled at boundaries
- [ ] Loading indicator while PDF is converting
- [ ] Bbox overlay layer renders on top of preview