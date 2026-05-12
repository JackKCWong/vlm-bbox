# Task 8: Clear/Reset Functionality

## Task Overview
Implement Clear button to remove bounding boxes from the current image preview.

## Dependencies
Task 1: Project Setup, Task 7: Bounding Box Rendering

## External Libraries Required
None

## Pseudo Code - Main Flow
```
1. Update Zustand store
   - Add clearBoundingBoxes action
   - Reset boxes array to empty

2. Update ResultSection component
   - Wire Clear button to store action
   - Call clearBoundingBoxes on click

3. Update BoundingBoxOverlay
   - Handle empty boxes array (render nothing)
```

## File Structure
```
/src/store
  useAppStore.ts
/src/components
  ResultSection.tsx (update)
```

## Acceptance Criteria
- [ ] Clear button click removes all bounding boxes
- [ ] Image preview remains visible
- [ ] Store state updates correctly
- [ ] UI reflects cleared state immediately