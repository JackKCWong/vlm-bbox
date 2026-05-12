# Task 7: Image Metadata Status Bar

## Task Overview
Create a status bar component that displays metadata about the currently viewed image (dimensions, file size).

## Dependencies
- Task 1: Dependencies installed

## External Libraries Required
| Library | Purpose |
|---------|---------|
| (none additional) | Use native React and Tailwind CSS |

## Pseudo Code - Main Flow

### Component: ImageMetadataBar
```typescript
interface ImageMetadata {
  width: number;      // pixels
  height: number;    // pixels
  sizeBytes: number; // bytes
  filename: string;
}

interface ImageMetadataBarProps {
  metadata: ImageMetadata | null;
}

// 1. Container: fixed height (~32px), horizontal flex
// 2. Left section: filename
// 3. Right section (in order):
   - Dimensions: "{width} x {height} px"
   - File size: formatted (KB/MB)
// 4. Separator: vertical bar between sections

// Format helper:
// - < 1KB: show bytes
// - 1KB - 1MB: show as KB with 1 decimal
// - > 1MB: show as MB with 2 decimals
```

### Display Format
| Property | Format | Example |
|----------|--------|---------|
| Filename | text | "document.pdf" |
| Dimensions | "{w} x {h} px" | "1920 x 1080 px" |
| File size | auto-scale | "2.5 MB" or "450 KB" |

### Visibility
- Show metadata only when image is loaded
- Show "No image selected" when nothing is selected
- Position: fixed at bottom of Preview section

## File Structure
```
app/components/
  ImageMetadataBar.tsx    # Metadata display component
```

## Acceptance Criteria
- [ ] Displays filename of current image
- [ ] Shows dimensions in "W x H px" format
- [ ] Shows file size in human-readable format
- [ ] Hidden when no image selected
- [ ] Updates when different image selected
- [ ] Updates when page changes (for PDFs)