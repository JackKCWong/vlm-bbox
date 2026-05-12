# Task 4: Image Preview with Navigator

## Task Overview
Create image preview component with PDF page navigation and status bar showing metadata.

## Dependencies
Task 1: Project Setup, Task 2: File Upload Component, Task 3: PDF to Image Conversion

## External Libraries Required
None

## Pseudo Code - Main Flow
```
1. Create ImagePreview component (80% width)
   - Accept image blob and current page info
   - Display image with object-fit: contain
   - Maintain aspect ratio

2. Create PageNavigator component
   - Show "Page X of Y" indicator
   - < and > buttons for prev/next
   - Disable buttons at boundaries
   - Handle page change callbacks

3. Create PreviewArea component
   - Check if current file is PDF or image
   - If PDF: show PageNavigator + ImagePreview
   - If image: show ImagePreview only
   - Handle page navigation state

4. Create StatusBar component
   - Display image dimensions (height x width)
   - Display file size in KB/MB
   - Fixed at bottom of Preview section
```

## File Structure
```
/src/components
  /preview
    ImagePreview.tsx
    PageNavigator.tsx
    PreviewArea.tsx
    StatusBar.tsx
```

## Acceptance Criteria
- [ ] Images display correctly with proper aspect ratio
- [ ] PDF pages can be navigated with < > buttons
- [ ] Page indicator shows correct X of Y
- [ ] Status bar shows width, height, and file size
- [ ] Buttons disable appropriately at boundaries