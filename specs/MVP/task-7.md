# Task 7: Metadata Status Bar

## Task Overview
Display image metadata (height, width in pixels, file size in MB/KB) at the bottom of the Preview section.

## Dependencies
- Task 5: Image Preview

## External Libraries Required
None

## Pseudo Code - Main Flow

```
1. Create MetadataBar component
2. Accept image data as props:
   - width (number, pixels)
   - height (number, pixels)
   - size (number, bytes)
3. Format size:
   - If >= 1MB show "X.XX MB"
   - If < 1MB show "X.XX KB"
4. Render at bottom of Preview section:
   - "Dimensions: W x H px"
   - "Size: X.XX MB/KB"
5. Handle empty state when no image selected
```

## File Structure
```
/components
  /MetadataBar.tsx    - Image metadata display
```

## Acceptance Criteria
- [ ] Shows image dimensions in format "W x H px"
- [ ] Shows file size formatted as MB or KB
- [ ] Updates when different image is selected
- [ ] Shows placeholder when no image selected