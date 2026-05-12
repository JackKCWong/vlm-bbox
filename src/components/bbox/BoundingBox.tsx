'use client';

import { BoundingBox as BoundingBoxType } from '@/lib/types';

interface BoundingBoxProps {
  box: BoundingBoxType;
  imgWidth: number;
  imgHeight: number;
}

export function BoundingBox({ box, imgWidth, imgHeight }: BoundingBoxProps) {
  const left = box.x * imgWidth;
  const top = box.y * imgHeight;
  const width = box.width * imgWidth;
  const height = box.height * imgHeight;

  return (
    <div
      className="absolute pointer-events-none border-2 border-red-500 bg-red-500/10"
      style={{
        left,
        top,
        width,
        height,
      }}
    >
      <span className="absolute -top-5 left-0 bg-red-500 px-1 text-xs text-white whitespace-nowrap">
        {box.label}
        {box.confidence !== undefined && ` ${Math.round(box.confidence * 100)}%`}
      </span>
    </div>
  );
}