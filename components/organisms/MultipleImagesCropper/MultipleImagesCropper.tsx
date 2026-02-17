'use client';

import { format } from 'date-fns';
import download from 'downloadjs';
import { ChangeEvent, FC, useState } from 'react';
import { Area } from 'react-easy-crop';

import { IOption } from '@/atoms/DropdownSelect/DropdownSelect.d';
import getCroppedImg from '@/lib/cropper';
import { dereOptions, frameOptions } from '@/lib/helpers';
import MultiImagesNav from '@/molecules/MultiImagesNav/MultiImagesNav';
import MultiImagesPreview, {
  type ImageItem,
} from '@/molecules/MultiImagesPreview/MultiImagesPreview';
import { IMultipleImagesCropper } from '@/organisms/MultipleImagesCropper/MultipleImagesCropper.d';

const createImageId = () =>
  `img-${Date.now()}-${Math.random().toString(36).slice(2)}`;

const MultipleImagesCropper: FC<IMultipleImagesCropper> = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [croppedAreasPixels, setCroppedAreasPixels] = useState<Area[]>([]);
  const [frame, setFrame] = useState<IOption>(frameOptions[0]);
  const [dere, setDere] = useState<IOption>(dereOptions[0]);
  const [frameStats, setFrameStats] = useState<boolean>(false);

  const handleSelectFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      Array.from(e.target.files).forEach(file => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          const src = reader.result as string;
          setImages(old => [...old, { id: createImageId(), src }]);
          setCroppedAreasPixels(old => [
            ...old,
            { width: 0, height: 0, x: 0, y: 0 },
          ]);
        });
        reader.readAsDataURL(file);
      });
    }
  };

  const handleRemoveFromPreview = (index: number) => {
    setImages(prev => prev.filter((_, idx) => idx !== index));
    setCroppedAreasPixels(prev =>
      prev.filter((_, idx: number) => idx !== index),
    );
  };

  const handleUpdateCroppedAreaPixels = (
    index: number,
    croppedAreaPixels: Area,
  ) => {
    setCroppedAreasPixels(prev =>
      prev.map((area, i) => (i === index ? croppedAreaPixels : area)),
    );
  };

  const handleSaveImage = (index: number) => {
    try {
      const item = images[index];
      const area = croppedAreasPixels[index];
      if (!item || !area) return;
      getCroppedImg(item.src, area, 0).then((image: string) => {
        download(
          image,
          `image-${index + 1}-${format(new Date(), 'yyyyMMddHHmmss')}`,
          'image/jpeg',
        );
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <MultiImagesNav
        frame={frame}
        dere={dere}
        frameStats={frameStats}
        handleSelectFiles={handleSelectFiles}
        handleSelectFrame={setFrame}
        handleSelectDere={setDere}
        handleToggleStats={(value: boolean) => setFrameStats(value)}
      />

      <MultiImagesPreview
        images={images}
        frame={frame}
        dere={dere}
        stats={frameStats}
        handleRemoveFromPreview={handleRemoveFromPreview}
        handleUpdateCroppedAreaPixels={handleUpdateCroppedAreaPixels}
        handleSaveImage={handleSaveImage}
      />
    </div>
  );
};

export default MultipleImagesCropper;
