# Task 3: File List Sidebar

## Task Overview
Create a sidebar component that displays all uploaded files and allows user selection and removal.

## Dependencies
- Task 2: File upload component must exist

## External Libraries Required
| Library | Purpose |
|---------|---------|
| (none additional) | Use native React and Tailwind CSS |

## Pseudo Code - Main Flow

### Component: FileListSidebar
```typescript
interface FileItem {
  id: string;
  name: string;
  type: 'pdf' | 'image';
  size: number;
}

interface FileListSidebarProps {
  files: FileItem[];
  selectedFileId: string | null;
  onFileSelect: (id: string) => void;
  onFileRemove: (id: string) => void;
}

// 1. Container: 20% width, scrollable list
// 2. Header: "Files" title
// 3. File list: mapped from files array
// 4. Each file item:
   - Clickable area (triggers onFileSelect)
   - Display filename (truncate if too long)
   - Display file type icon (PDF vs image)
   - Remove button (X icon, triggers onFileRemove)
   - Selected state styling (background highlight)
// 5. Empty state: "No files uploaded" message
```

### State Transitions
| Action | Result |
|--------|--------|
| File added | Prepend to list, auto-select if first file |
| File removed | Remove from list, deselect if selected |
| File clicked | Update selectedFileId |
| Remove clicked | Remove file, handle selection change |

## File Structure
```
app/components/
  FileListSidebar.tsx    # File list component
```

## Acceptance Criteria
- [ ] Displays all uploaded file names
- [ ] Shows file type icon (PDF vs image)
- [ ] Highlights currently selected file
- [ ] Remove button (X) visible on hover
- [ ] Remove button removes file from list
- [ ] Clicking file name selects it
- [ ] Empty state when no files uploaded
- [ ] List is scrollable when many files