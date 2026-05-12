# Task 2: UI Layout

## Task Overview
Create the main page layout with a 50/50 horizontal split between the Preview section (left) and Result section (right).

## Dependencies
- Task 1: Project Setup and Dependencies

## External Libraries Required
None (using Tailwind CSS which comes with Next.js)

## Pseudo Code - Main Flow

```
1. Create main page component (app/page.tsx)
2. Define a flex container with horizontal layout
3. Left side (50%): Preview section
   - 20% width: File list sidebar
   - 80% width: Image preview area
4. Right side (50%): Result section
   - Contains prompt editor and action buttons
5. Use Tailwind CSS classes for styling
```

## File Structure
```
/app
  /page.tsx           - Main page with 50/50 layout
  /layout.tsx         - Root layout (unchanged)
```

## Acceptance Criteria
- [ ] Page is horizontally split into two 50% sections
- [ ] Left section labeled "Preview"
- [ ] Right section labeled "Result"
- [ ] Layout is responsive and maintains split on resize