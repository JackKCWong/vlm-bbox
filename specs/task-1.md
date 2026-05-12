# Task 1: Project Dependencies Setup

## Task Overview
Set up the initial project with all required dependencies for the VLM bounding box demo application.

## Dependencies
- None (base task)

## External Libraries Required
| Library | Version | Purpose |
|---------|---------|---------|
| react-dropzone | ^14.x | File drag-and-drop upload component |
| pdfjs-dist | ^4.x | PDF rendering and conversion to images |
| @uiw/react-md-editor | ^2.x | Markdown editor for prompt input |
| axios | ^1.x | HTTP client for backend API calls |

## Pseudo Code - Main Flow

### 1. Install Dependencies
```
npm install react-dropzone pdfjs-dist @uiw/react-md-editor axios
```

### 2. Configure pdf.js Worker
```
// In a utility file (e.g., lib/pdfUtils.ts)
import * as pdfjs from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
```

### 3. Verify Setup
- Create a test component that renders all imported modules
- Ensure no TypeScript errors
- Verify build passes

## File Structure
```
app/
  lib/
    pdfUtils.ts     # PDF processing utilities
    api.ts          # Backend API client
  components/
    (components will be created in their respective tasks)
  page.tsx          # Main page (updated in task 10)
```

## Acceptance Criteria
- [ ] All dependencies installed without conflicts
- [ ] pdf.js worker configured correctly
- [ ] Project builds without errors
- [ ] TypeScript types are resolved