# Task List Summary

## External Dependencies

| Library | Version | Purpose |
|---------|---------|---------|
| next | 14+ | Framework |
| react | 18+ | UI library |
| typescript | 5+ | Type safety |
| pdf-lib | ^1.17.1 | PDF manipulation |
| pdfjs-dist | ^4.0.379 | PDF rendering (browser) |
| react-dropzone | ^14.2.3 | Drag & drop file upload |
| @uiw/react-md-editor | ^4.0.0 | Markdown editor |
| axios | ^1.6.0 | HTTP client |
| zustand | ^4.4.0 | State management |

## Task Order

| # | Task | Description |
|---|------|-------------|
| 1 | Project Setup | Initialize Next.js with TypeScript, install dependencies, create folder structure and Zustand store |
| 2 | File Upload Component | Drag & drop zone, file list sidebar with selection and removal |
| 3 | PDF to Image Conversion | Browser-based PDF rendering with localStorage caching |
| 4 | Image Preview with Navigator | Display images/PDF pages, page navigation, metadata status bar |
| 5 | Prompt Editor | Markdown editor with Run and Clear buttons |
| 6 | Backend API Integration | API route for VLM communication, bounding box parsing |
| 7 | Bounding Box Rendering | Overlay boxes with labels on image preview |
| 8 | Clear/Reset Functionality | Clear button removes bounding boxes |
| 9 | Main Page Composition | Compose 50/50 layout with all components integrated |

## Implementation Order Rationale

1. **Task 1 (Project Setup)** - Foundation for everything else
2. **Task 2 (File Upload)** - Users need to upload files before anything else
3. **Task 3 (PDF Conversion)** - Depends on upload to get PDF files
4. **Task 4 (Image Preview)** - Depends on upload and PDF conversion
5. **Task 5 (Prompt Editor)** - Can be built in parallel with tasks 2-4 since it's independent
6. **Task 6 (Backend API)** - Backend work, independent of UI
7. **Task 7 (Bounding Box Rendering)** - Needs preview component from Task 4 and API from Task 6
8. **Task 8 (Clear/Reset)** - Small addition, depends on Task 7
9. **Task 9 (Main Page)** - Integration task, depends on all previous tasks