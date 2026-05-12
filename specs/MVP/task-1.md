# Task 1: Project Setup and Dependencies

## Task Overview
Initialize the Next.js project and install all required dependencies for the VLM bounding box demo application.

## Dependencies
None

## External Libraries Required
| Library | Version | Purpose |
|---------|---------|---------|
| next | 14.x | React framework |
| react | 18.x | UI library |
| react-dropzone | ^14.x | Drag and drop file upload |
| pdfjs-dist | ^4.x | PDF rendering and conversion to images |
| react-markdown | ^9.x | Markdown editor for prompt input |

## Pseudo Code - Main Flow

```
1. Initialize Next.js project with TypeScript
2. Install dependencies:
   - react-dropzone for file upload
   - pdfjs-dist for PDF to image conversion
   - react-markdown for prompt editor
3. Create folder structure:
   - /app - Next.js app router pages
   - /components - React components
   - /lib - Utility functions
   - /types - TypeScript types
4. Configure PDF.js worker
5. Set up basic Tailwind CSS configuration
```

## File Structure
```
/app
  /page.tsx           - Main page entry
  /layout.tsx         - Root layout
  /globals.css        - Global styles
/components
  /FileUpload.tsx     - Drag and drop zone
  /FileList.tsx       - Sidebar file list
  /ImagePreview.tsx   - Image preview with bboxes
  /PromptEditor.tsx   - Markdown prompt input
  /MetadataBar.tsx    - Image metadata display
  /BoundingBox.tsx    - Bbox overlay component
/lib
  /pdfUtils.ts        - PDF conversion utilities
  /types.ts           - TypeScript interfaces
```

## Acceptance Criteria
- [ ] Next.js 14 project with TypeScript compiles without errors
- [ ] All required packages installed successfully
- [ ] PDF.js worker configured for client-side PDF rendering
- [ ] Basic folder structure created