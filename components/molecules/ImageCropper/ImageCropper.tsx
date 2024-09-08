'use client';

import { IImageCropper } from '@/components/molecules/ImageCropper/ImageCropper.d';
import { FC, useState } from 'react';
import Cropper, { Area, Point } from 'react-easy-crop';

const ImageCropper: FC<IImageCropper> = ({
  imageSrc,
  zoom,
  rotation,
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
    </div>
  );
};

export default ImageCropper;
