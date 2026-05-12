import { DetectionResponse } from './types';

const VLM_ENDPOINT = process.env.VLM_ENDPOINT || 'http://localhost:8000/vlm/detect';

export async function sendToVLM(
  images: { data: string; width: number; height: number }[],
  prompt: string
): Promise<DetectionResponse> {
  const response = await fetch(VLM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ images, prompt }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`VLM request failed: ${response.status} ${errorText}`);
  }

  return response.json();
}

export function parseVLMResponse(rawResponse: unknown): DetectionResponse {
  if (typeof rawResponse !== 'object' || rawResponse === null) {
    throw new Error('Invalid VLM response format');
  }

  const response = rawResponse as Record<string, unknown>;

  if (!Array.isArray(response.results)) {
    throw new Error('VLM response missing results array');
  }

  return {
    results: response.results.map((result) => ({
      boxes: Array.isArray(result.boxes) ? result.boxes : [],
      imageIndex: typeof result.imageIndex === 'number' ? result.imageIndex : 0,
    })),
    error: typeof response.error === 'string' ? response.error : undefined,
  };
}