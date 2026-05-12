# Task 7: Bounding Box Rendering

## Task Overview
Create component to render bounding boxes with labels overlaid on image preview.

## Dependencies
Task 1: Project Setup, Task 4: Image Preview with Navigator, Task 6: Backend API Integration

## External Libraries Required
None

## Pseudo Code - Main Flow
```
1. Create BoundingBoxOverlay component
   - Accept array of bounding boxes and image dimensions
   - Render absolute positioned divs for each box
   - Convert normalized coords to pixel coords
   - Show label with confidence score

2. Create BoundingBoxSVG component (alternative)
   - Use SVG for rendering boxes
   - Support for transparent fill and colored strokes
   - Label positioned at box corner

3. Integrate with ImagePreview
   - Accept boundingBoxes prop
   - Render overlay on top of image
   - Pass through click events to image
```

## File Structure
```
/src/components
  /bbox
    BoundingBoxOverlay.tsx
    BoundingBox.tsx
```

## Acceptance Criteria
- [ ] Bounding boxes render at correct positions
- [ ] Box coordinates match image scale
- [ ] Labels display with box identification
- [ ] Multiple boxes render without overlap issues
- [ ] Boxes scale correctly with image resize