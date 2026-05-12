# Task 2: File Upload Component

## Task Overview
Create drag & drop file upload component and file list sidebar with selection and removal capabilities.

## Dependencies
Task 1: Project Setup

## External Libraries Required
| Library | Version | Purpose |
|---------|---------|---------|
| react-dropzone | ^14.2.3 | Drag & drop file handling |

## Pseudo Code - Main Flow
```
1. Create DropZone component
   - Accept PDF and image files only
   - Show visual feedback on drag over
   - Return list of accepted File objects

2. Create FileList component
   - Display list of uploaded filenames
   - Each item shows filename and X button
   - Click filename to select file
   - Click X to remove file
   - Highlight selected file

3. Create FileListSidebar component (20% width)
   - Combine DropZone and FileList
   - Handle file add/remove/select events
```

## File Structure
```
/src/components
  /upload
    DropZone.tsx
    FileList.tsx
    FileListSidebar.tsx
```

## Acceptance Criteria
- [ ] Drag & drop zone accepts PDF and image files
- [ ] Invalid files are rejected with error message
- [ ] File list displays all uploaded filenames
- [ ] Clicking filename selects that file
- [ ] Clicking X removes file from list
- [ ] Selected file is visually highlighted