# Task 4: File List Sidebar

## Task Overview
Create the file list sidebar (20% width) that displays all uploaded filenames, allows selection by clicking, and removal by clicking X.

## Dependencies
- Task 2: UI Layout
- Task 3: File Upload Component

## External Libraries Required
None

## Pseudo Code - Main Flow

```
1. Create FileList component
2. Render a vertical list of uploaded files
3. Each file item displays:
   - Filename (truncated if too long)
   - File type icon (PDF vs image)
   - X button for removal
4. On file name click:
   - Set selected file in state
   - Trigger preview display
5. On X click:
   - Remove file from state
   - Clear preview if removed file was selected
6. Add visual styling:
   - Selected file highlighted
   - Hover effects on items
7. Handle empty state: "No files uploaded"
```

## File Structure
```
/components
  /FileList.tsx       - File list sidebar component
```

## Acceptance Criteria
- [ ] Sidebar width is 20% of Preview section
- [ ] All uploaded filenames displayed in a list
- [ ] Click on filename selects the file (visual highlight)
- [ ] X button removes file from list
- [ ] Empty state shows placeholder message