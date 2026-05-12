# Task 12: Clear Functionality

## Task Overview
Implement the Clear button functionality to remove bounding boxes from the current image preview.

## Dependencies
- Task 11: Bounding Box Rendering

## External Libraries Required
None

## Pseudo Code - Main Flow

```
1. Add clearBboxes action to state management
2. On "Clear" button click:
   - Reset bbox state to empty array
   - Clear any result data
3. ImagePreview component:
   - Receives empty bboxes array
   - Renders without bbox overlay
4. Preserve file selection and image display
5. Allow user to run again after clearing
```

## File Structure
```
/components
  /ActionButtons.tsx  - Updated with clear handler
/app
  /page.tsx           - Updated state management
```

## Acceptance Criteria
- [ ] Clear button removes all bounding boxes
- [ ] Image remains displayed after clearing
- [ ] File selection preserved after clearing
- [ ] Can run prompt again after clearing
- [ ] Clear only affects current image's bboxes