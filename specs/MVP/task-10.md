# Task 10: Backend API Integration

## Task Overview
Create a Next.js API route that receives image(s) and a prompt, sends them to the VLM, and returns the bounding box results.

## Dependencies
- Task 1: Project Setup and Dependencies

## External Libraries Required
None (using Next.js built-in API routes)

## Pseudo Code - Main Flow

```
1. Create API route at /app/api/vlm/route.ts
2. Accept POST requests with:
   - images: base64 encoded image data
   - prompt: user-provided text prompt
3. Validate request:
   - Ensure images and prompt provided
   - Check image format validity
4. Send request to VLM:
   - Format request payload for VLM API
   - Include images and prompt
   - Handle authentication
5. Parse VLM response:
   - Extract bounding box coordinates
   - Extract labels/confidence if provided
6. Return formatted response:
   - { bboxes: [{ x, y, width, height, label }] }
7. Handle errors:
   - VLM timeout
   - Invalid response format
   - Return appropriate error codes
```

## File Structure
```
/app
  /api
    /vlm
      /route.ts      - VLM API endpoint
```

## Acceptance Criteria
- [ ] POST endpoint accepts image and prompt
- [ ] Returns bounding boxes in format { bboxes: [...] }
- [ ] Handles multiple images (for PDF pages)
- [ ] Returns appropriate error codes on failure
- [ ] Request timeout after 30 seconds