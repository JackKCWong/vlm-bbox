# Task 6: Backend API Integration

## Task Overview
Create backend API endpoint to receive images and communicate with VLM for bounding box detection.

## Dependencies
Task 1: Project Setup, Task 4: Image Preview with Navigator

## External Libraries Required
| Library | Version | Purpose |
|---------|---------|---------|
| axios | ^1.6.0 | HTTP client |

## Pseudo Code - Main Flow
```
1. Create API route /api/detect
   - Accept POST requests with multipart form data
   - Receive image(s) as files
   - Receive prompt as text field
   - Validate inputs

2. Create VLM client (lib/vlmClient.ts)
   - Send images and prompt to VLM service
   - Send to configured VLM endpoint
   - Parse VLM response for bounding boxes
   - Return structured bbox data

3. Create types for bbox response
   - BoundingBox { x, y, width, height, label, confidence }
   - DetectionResult { boxes: BoundingBox[], imageIndex: number }

4. Create frontend API caller
   - Convert image blob to base64
   - Send to /api/detect with prompt
   - Handle response and errors
```

## File Structure
```
/src/app/api/detect/route.ts
/src/lib
  vlmClient.ts
  types.ts
/hooks
  useDetection.ts
```

## Acceptance Criteria
- [ ] API route accepts POST with image and prompt
- [ ] API validates inputs and returns errors
- [ ] VLM client sends correct request format
- [ ] Bounding boxes are parsed and returned
- [ ] Frontend handles response and errors