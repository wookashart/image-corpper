'use client';

import { FC } from 'react';

import { IPreviewOutput } from '@/atoms/PreviewOutput/PreviewOutput.d';

const PreviewOutput: FC<IPreviewOutput> = ({ imgSrc, croppedArea }) => {
  const CROP_AREA_ASPECT = 448 / 640;
  const scale = 100 / croppedArea.width;
  const transform = {
    x: `${-croppedArea.x * scale}%`,
    y: `${-croppedArea.y * scale}%`,
    scale,
    width: '100%',
    height: 'auto',
  };

  const imageStyle = {
    transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scale},${transform.scale},1)`,
    width: transform.width,
    height: transform.height,
  };

  return (
    <div
      className="relative w-[220px] h-[309px] overflow-hidden"
      style={{ paddingBottom: `${100 / CROP_AREA_ASPECT}%` }}
    >
      <img
        src={imgSrc}
        alt=""
        style={imageStyle}
        className="absolute top-0 left-0 origin-top-left max-w-none max-h-none"
        loading="lazy"
      />
    </div>
  );
};

export default PreviewOutput;
