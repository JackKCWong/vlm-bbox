# Task 9: Main Page Composition

## Task Overview
Compose the main page layout with Preview section (left 50%) and Result section (right 50%).

## Dependencies
Task 1: Project Setup, Task 2: File Upload, Task 4: Image Preview, Task 5: Prompt Editor, Task 6: API Integration, Task 7: Bounding Box Rendering, Task 8: Clear/Reset

## External Libraries Required
None

## Pseudo Code - Main Flow
```
1. Create MainPage component
   - Split layout into left (50%) and right (50%)
   - Left: Preview section
     - FileListSidebar (20%)
     - PreviewArea (80%)
   - Right: Result section
     - PromptEditor (majority)
     - ActionButtons (bottom)

2. Integrate all state
   - Connect file selection to preview
   - Connect Run button to API
   - Connect API response to bbox rendering
   - Connect Clear button to state reset

3. Add global styles
   - Ensure 50/50 split works
   - Proper spacing and borders
   - Responsive behavior
```

## File Structure
```
/src/app/page.tsx (update to compose main layout)
/src/components
  MainPage.tsx (if separate component)
  PreviewSection.tsx
  ResultSection.tsx
```

## Acceptance Criteria
- [ ] Page renders with 50/50 split layout
- [ ] Preview section shows file list and image
- [ ] Result section shows prompt editor and buttons
- [ ] File selection updates preview
- [ ] Run button triggers detection
- [ ] Clear button removes boxes
- [ ] All components work together correctly