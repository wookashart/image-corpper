'use client';

import { IImageCropper } from '@/components/molecules/ImageCropper/ImageCropper.d';
import { FC, useState } from 'react';
import Cropper, { Area, Point } from 'react-easy-crop';

const ImageCropper: FC<IImageCropper> = ({
  imageSrc,
  zoom,
  rotation,
  frame = 'none',
  dere = 'none',
  stats = false,
  handlePreviewUpdate,
  handleZoomChange,
}) => {
  const [crop, setCrop] = useState<Point>({
    x: 0,
    y: 0,
  });

  const handleCropChange = (crop: Point) => setCrop(crop);
  const handleCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    handlePreviewUpdate(croppedAreaPixels);
  };

  return (
    <div className="w-[450px] h-[642px] border-dashed border-background-secondary border-[1px] flex justify-center items-center p-[5px] relative">
      <Cropper
        image={imageSrc}
        crop={crop}
        cropSize={{ width: 448, height: 640 }}
        zoom={zoom}
        rotation={rotation}
        showGrid={false}
        onCropChange={handleCropChange}
        onCropComplete={handleCropComplete}
        onZoomChange={handleZoomChange}
      />

      {frame !== 'none' && (
        <img
          src={`images/border/${frame}.png`}
          alt="frame"
          className="absolute z-10 max-w-none -lef-[12px] -top-[13px] pointer-events-none"
        />
      )}
      {frame !== 'none' && dere !== 'none' && (
        <img
          src={`images/dere/${dere}.png`}
          alt="dere"
          className="absolute z-10 max-w-none -lef-[12px] -top-[13px] pointer-events-none"
        />
      )}
      {frame !== 'none' && !!stats && (
        <img
          src="images/stats/fire.png"
          alt="stat fire"
          className="absolute z-10 max-w-none -lef-[12px] -top-[13px] pointer-events-none"
        />
      )}
      {frame !== 'none' && !!stats && (
        <img
          src="images/stats/heart.png"
          alt="stat heart"
          className="absolute z-10 max-w-none -lef-[12px] -top-[13px] pointer-events-none"
        />
      )}
      {frame !== 'none' && !!stats && (
        <img
          src="images/stats/shield.png"
          alt="stat shield"
          className="absolute z-10 max-w-none -lef-[12px] -top-[13px] pointer-events-none"
        />
      )}
    </div>
  );
};

export default ImageCropper;
