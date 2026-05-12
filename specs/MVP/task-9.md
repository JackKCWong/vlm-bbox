# Task 9: Action Buttons

## Task Overview
Add Run and Clear buttons at the bottom of the Result section to trigger the VLM request and clear bounding boxes.

## Dependencies
- Task 7: Prompt Editor
- Task 8: Prompt Editor

## External Libraries Required
None

## Pseudo Code - Main Flow

```
1. Create ActionButtons component
2. Render two buttons:
   - "Run" button (primary style)
   - "Clear" button (secondary style)
3. Run button:
   - Disabled when no prompt or no image
   - On click: call API with prompt and image
   - Show loading spinner while processing
   - Display results when complete
4. Clear button:
   - On click: clear all bounding boxes from preview
   - Reset any result state
5. Position buttons at bottom of Result section
```

## File Structure
```
/components
  /ActionButtons.tsx  - Run and Clear buttons
```

## Acceptance Criteria
- [ ] Run button triggers API call with prompt and image
- [ ] Run button disabled when no prompt or no image
- [ ] Clear button removes all bounding boxes
- [ ] Loading state shown during API call
- [ ] Buttons styled consistently with app theme