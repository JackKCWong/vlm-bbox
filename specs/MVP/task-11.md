# Task 11: Bounding Box Rendering

## Task Overview
Render bounding boxes with labels on top of the image preview when VLM results are received.

## Dependencies
- Task 5: Image Preview
- Task 10: Backend API Integration

## External Libraries Required
None

## Pseudo Code - Main Flow

```
1. Create BoundingBox component
2. Accept bbox data:
   - x, y: top-left coordinates (0-1 normalized or pixels)
   - width, height: dimensions
   - label: text label for the box
3. Render overlay on image:
   - Absolute positioned rectangle
   - Semi-transparent fill
   - Solid border (2px)
4. Render label:
   - Positioned at top-left of box
   - Background color for readability
   - Font size appropriate for box size
5. Handle bbox coordinate system:
   - Convert to image pixel coordinates
   - Scale appropriately on resize
6. Support multiple bboxes:
   - Render all bboxes on same layer
   - Unique colors per bbox (optional)
```

## File Structure
```
/components
  /BoundingBox.tsx    - Single bounding box overlay
/components
  /BoundingBoxOverlay.tsx - Container for all bboxes
```

## Acceptance Criteria
- [ ] Bounding boxes rendered at correct positions
- [ ] Labels displayed with each bbox
- [ ] Boxes scale correctly when image resizes
- [ ] Multiple bboxes rendered simultaneously
- [ ] Semi-transparent fill for visibility
- [ ] Smooth resize handling