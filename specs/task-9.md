# Task 9: Backend API Integration

## Task Overview
Implement the backend API client to send images to the VLM and receive bounding box predictions.

## Dependencies
- Task 1: axios must be installed
- Task 4: Image preview (understanding data flow)

## External Libraries Required
| Library | Purpose |
|---------|---------|
| axios | HTTP client for API calls |

## Pseudo Code - Main Flow

### API Client: api/vlm.ts
```typescript
interface BoundingBox {
  label: string;
  x: number;      // 0-100 percentage
  y: number;      // 0-100 percentage
  width: number;  // 0-100 percentage
  height: number; // 0-100 percentage
  confidence?: number;
}

interface VLMResponse {
  success: boolean;
  boundingBoxes: BoundingBox[];
  error?: string;
}

interface AnalyzeImageRequest {
  image: string;    // base64 data URL
  prompt: string;
  filename?: string;
}

// 1. Prepare image data
//    - If image is already base64, use as-is
//    - If image is URL, convert to base64 or send URL
// 2. POST to /api/analyze with body
// 3. Handle response
// 4. Transform coordinates to percentages (0-100)
```

### API Endpoint (Backend - for reference)
```
POST /api/analyze
Content-Type: application/json

Request:
{
  "image": "data:image/png;base64,...",
  "prompt": "Identify all cars in the image",
  "filename": "traffic.jpg"
}

Response:
{
  "success": true,
  "boundingBoxes": [
    {"label": "car", "x": 10.5, "y": 20.3, "width": 15.2, "height": 25.1, "confidence": 0.95},
    ...
  ]
}
```

### Error Handling
- Network errors: show retry option
- API errors: display error message from response
- Timeout: 60 second timeout for large images
- Invalid response format: log and show generic error

### Image Preparation
```typescript
// Before sending:
1. Validate image dimension (max 4096x4096)
2. If larger, resize proportionally
3. Convert to JPEG if PNG for smaller size
4. Generate base64 string
5. Log request size for debugging
```

## File Structure
```
app/lib/
  api.ts          # API client configuration
  vlm.ts          # VLM-specific API calls
```

## Acceptance Criteria
- [ ] Sends image as base64 to backend
- [ ] Sends prompt text to backend
- [ ] Receives and parses bounding box response
- [ ] Transforms coordinates to 0-100 range
- [ ] Handles network errors gracefully
- [ ] Handles API errors with user message
- [ ] Timeout after 60 seconds
- [ ] Supports both PDF pages and images