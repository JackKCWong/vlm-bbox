# Task 3: File Upload Component

## Task Overview
Implement a drag-and-drop zone that allows users to upload multiple PDF and image files.

## Dependencies
- Task 1: Project Setup and Dependencies

## External Libraries Required
| Library | Version | Purpose |
|---------|---------|---------|
| react-dropzone | ^14.x | Drag and drop file upload component |

## Pseudo Code - Main Flow

```
1. Create FileUpload component using react-dropzone
2. Configure dropzone to accept:
   - PDF files (*.pdf, application/pdf)
   - Image files (*.image/*)
   - Multiple files allowed
3. On file drop:
   - Validate file types
   - Add files to state management
   - Trigger preview generation
4. Display visual feedback:
   - "Drop files here" message when idle
   - Highlight border when dragging over
5. Support both drag-and-drop and click-to-upload
```

## File Structure
```
/components
  /FileUpload.tsx     - Drag and drop file upload component
```

## Acceptance Criteria
- [ ] Drag and drop zone accepts PDF and image files
- [ ] Multiple files can be uploaded at once
- [ ] Visual feedback when dragging files over the zone
- [ ] Click to upload also works
- [ ] Invalid file types are rejected with feedback