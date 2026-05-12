export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  confidence?: number;
}

export interface DetectionResult {
  boxes: BoundingBox[];
  imageIndex: number;
}

export interface DetectionResponse {
  results: DetectionResult[];
  error?: string;
}