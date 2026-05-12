# Task 1: Project Setup

## Task Overview
Set up the Next.js project with all required dependencies and folder structure.

## Dependencies
None (this is the first task)

## External Libraries Required
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

## Pseudo Code - Main Flow
```
1. Initialize Next.js project with TypeScript
2. Install all external libraries
3. Create folder structure:
   - src/app/
   - src/components/
   - src/lib/
   - src/store/
4. Set up Zustand store for app state
5. Create base CSS/styles
```

## File Structure
```
/src
  /app
    layout.tsx
    page.tsx
    globals.css
  /components
  /lib
  /store
    useAppStore.ts
```

## Acceptance Criteria
- [ ] Next.js app runs without errors
- [ ] All libraries installed successfully
- [ ] Folder structure matches spec
- [ ] Zustand store is created with proper types