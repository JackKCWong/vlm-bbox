# Task 2: File Upload Component

## Task Overview
Create a reusable drag-and-drop file upload component that handles PDF and image files.

## Dependencies
- Task 1: Project dependencies must be installed first

## External Libraries Required
| Library | Purpose |
|---------|---------|
| react-dropzone | Provides drag-and-drop file upload functionality |
| file-size | Human-readable file size formatting |

## Pseudo Code - Main Flow

### Component: FileUploader
```typescript
interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void;
  accept: {
    'application/pdf': string[];
    'image/*': string[];
  };
}

// 1. Initialize dropzone with useDropzone hook
// 2. Render dropzone area with dashed border
// 3. Show upload icon and instructional text
// 4. Handle drag-over state (change border color)
// 5. On drop:
   - Extract files from dataTransfer
   - Filter for PDF and image files only
   - Call onFilesSelected with selected files
```

### UI States
| State | Visual |
|-------|--------|
| Default | Dashed border, muted icon |
| Drag Over | Highlighted border, pulsing icon |
| Invalid File Hover | Red border, error icon |

### Accessibility
- Keyboard navigation support
- Screen reader announcements for file selection
- Focus indicators

## File Structure
```
app/components/
  FileUploader.tsx    # Main upload component
  FileUploader.css   # Styles (if needed beyond Tailwind)
```

## Acceptance Criteria
- [ ] Accepts PDF and image files via drag-and-drop
- [ ] Accepts PDF and image files via click-to-browse
- [ ] Rejects files with invalid extensions
- [ ] Displays instructional text in drop zone
- [ ] Handles multiple file selection
- [ ] Provides visual feedback during drag-over