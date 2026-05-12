# MVP Task List

## Task Overview

This application is a web app for testing a VLM's ability to return bounding boxes. It features drag-and-drop file upload, PDF-to-image conversion, and interactive bounding box visualization.

## Task Breakdown

| Order | Task | Description | Dependencies |
|-------|------|-------------|--------------|
| 1 | Project Setup | Initialize Next.js project, install dependencies (PDF.js, react-dropzone, etc.) | None |
| 2 | UI Layout | Create main page with 50/50 horizontal split (Preview 50%, Result 50%) | None |
| 3 | File Upload | Implement drag-and-drop zone for PDF/image files | 1 |
| 4 | File List Sidebar | Create 20% width sidebar with filename list, selection, and remove (X) functionality | 2, 3 |
| 5 | Image Preview | Display selected image (or PDF pages) in preview area with navigator | 2, 4 |
| 6 | PDF Conversion | Convert PDF pages to images in browser, cache to localStorage | 3, 5 |
| 7 | Metadata Status Bar | Show image dimensions, file size at bottom of Preview section | 5 |
| 8 | Prompt Editor | Create markdown editor in Result section | 2 |
| 9 | Action Buttons | Add Run and Clear buttons at bottom of Result section | 7, 8 |
| 10 | Backend API | Create API endpoint to send images to VLM and return bounding boxes | 1 |
| 11 | Bounding Box Rendering | Draw bounding boxes with labels on image preview | 5, 10 |
| 12 | Clear Functionality | Remove bounding boxes from current image | 11 |

## Acceptance Criteria

- [ ] Drag and drop multiple PDF/image files
- [ ] Display filenames on left (20% width), preview on right (80% width)
- [ ] Select file by clicking name, remove by X button
- [ ] PDF files converted to images in browser, cached in localStorage
- [ ] PDF navigator shows current page and prev/next buttons
- [ ] Image files displayed directly in preview
- [ ] Metadata status bar shows height, width, file size
- [ ] Prompt editor is a markdown editor
- [ ] Run button sends image(s) to backend, Clear button removes bboxes
- [ ] Bounding boxes with labels drawn on image preview after VLM response