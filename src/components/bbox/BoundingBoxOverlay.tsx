'use client';

import { BoundingBox as BoundingBoxType } from '@/lib/types';
import { BoundingBox } from './BoundingBox';

interface BoundingBoxOverlayProps {
  boxes: BoundingBoxType[];
  imgWidth: number;
  imgHeight: number;
}

export function BoundingBoxOverlay({ boxes, imgWidth, imgHeight }: BoundingBoxOverlayProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {boxes.map((box, index) => (
        <BoundingBox
          key={index}
          box={box}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
        />
      ))}
    </div>
  );
}