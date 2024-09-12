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
  handleSaveImage,
}) => {
  return (
    <div className="container mt-[10px] mb-[50px] mx-auto">
      <p className="mb-[30px] text-center text-sm">
        Images uploaded: {imagesSrc.length}
      </p>
      <div className="flex flex-wrap gap-5 justify-center">
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
            handleSaveImage={handleSaveImage}
          />
        ))}
      </div>
    </div>
  );
};

export default MultiImagesPreview;
