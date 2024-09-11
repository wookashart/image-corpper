'use client';

import { FC } from 'react';

import ImagePreview from '@/molecules/ImagePreview/ImagePreview';
import { IMultiImagesPreview } from '@/molecules/MultiImagesPreview/MultiImagesPreview.d';

const MultiImagesPreview: FC<IMultiImagesPreview> = ({
  imagesSrc,
  frame,
  dere,
  stats,
  handleRemoveFromPreview,
  handleUpdateCroppedAreaPixels,
}) => {
  return (
    <div className="container my-[50px] mx-auto flex flex-wrap gap-5 justify-center">
      {imagesSrc.map((img: string, index: number) => (
        <ImagePreview
          key={img}
          img={img}
          frame={frame.value}
          dere={dere.value}
          stats={stats}
          index={index}
          handleRemove={() => handleRemoveFromPreview(index)}
          handleUpdateCroppedAreaPixels={handleUpdateCroppedAreaPixels}
        />
      ))}
    </div>
  );
};

export default MultiImagesPreview;
