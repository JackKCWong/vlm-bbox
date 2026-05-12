# Task 4: Image Preview Component

## Task Overview
Create a component that displays images (or PDF pages converted to images) with support for bounding box overlay.

## Dependencies
- Task 1: Dependencies installed

## External Libraries Required
| Library | Purpose |
|---------|---------|
| (none additional) | Use native React and Tailwind CSS |

## Pseudo Code - Main Flow

### Component: ImagePreview
```typescript
interface BoundingBox {
  id: string;
  x: number;      // percentage from left
  y: number;      // percentage from top
  width: number;  // percentage of image width
  height: number; // percentage of image height
  label: string;
  color?: string;  // optional, default to predefined colors
}

interface ImagePreviewProps {
  src: string;           // image URL or base64
  alt?: string;
  boundingBoxes?: BoundingBox[];
  onBoundingBoxClick?: (id: string) => void;
}

// 1. Container: relative positioning for overlay
// 2. Image element: fill container, object-fit contain
// 3. Bounding box overlay:
   - Absolute positioned div covering image
   - SVG or div elements for each box
   - Box style: semi-transparent fill, solid border
   - Label: positioned at top-left of box
// 4. Image loading state: skeleton placeholder
// 5. Error state: broken image icon
```

### Bounding Box Styling
- Border: 2px solid with distinct color per box
- Fill: 20% opacity of border color
- Label: small text, positioned at top-left corner
- Colors cycle through: red, blue, green, yellow, purple

### Click Handling
- Clicking on a box triggers onBoundingBoxClick with box id
- Boxes should have pointer cursor on hover

## File Structure
```
app/components/
  ImagePreview.tsx        # Main preview component with bbox overlay
  BoundingBoxOverlay.tsx  # Reusable bounding box rendering
```

## Acceptance Criteria
- [ ] Displays image scaled to fit container
- [ ] Renders bounding boxes on top of image
- [ ] Labels visible on each bounding box
- [ ] Different colors for different boxes
- [ ] Hover effect on bounding boxes
- [ ] Clickable bounding boxes (triggers callback)
- [ ] Handles loading state with placeholder
- [ ] Handles error state gracefully