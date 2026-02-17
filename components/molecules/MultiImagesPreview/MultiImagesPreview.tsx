'use client';

import { FC } from 'react';

import ImagePreview from '@/molecules/ImagePreview/ImagePreview';
import {
  IMultiImagesPreview,
  type ImageItem,
} from '@/molecules/MultiImagesPreview/MultiImagesPreview.d';

export type { ImageItem };

const MultiImagesPreview: FC<IMultiImagesPreview> = ({
  images,
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
        Images uploaded: {images.length}
      </p>
      <div className="flex flex-wrap gap-5 justify-center">
        {images.map((item, index) => (
          <ImagePreview
            key={item.id}
            img={item.src}
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
