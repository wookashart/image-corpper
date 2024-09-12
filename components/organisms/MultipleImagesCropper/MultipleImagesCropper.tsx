'use client';

import { format } from 'date-fns';
import download from 'downloadjs';
import { ChangeEvent, FC, useState } from 'react';
import { Area } from 'react-easy-crop';

import { IOption } from '@/atoms/DropdownSelect/DropdownSelect.d';
import getCroppedImg from '@/lib/cropper';
import { dereOptions, frameOptions } from '@/lib/helpers';
import MultiImagesNav from '@/molecules/MultiImagesNav/MultiImagesNav';
import MultiImagesPreview from '@/molecules/MultiImagesPreview/MultiImagesPreview';
import { IMultipleImagesCropper } from '@/organisms/MultipleImagesCropper/MultipleImagesCropper.d';

const MultipleImagesCropper: FC<IMultipleImagesCropper> = () => {
  const [imagesSrc, setImagesSrc] = useState<string[]>([]);
  const [croppedAreasPixels, setCroppedAreasPixels] = useState<Area[]>([]);
  const [frame, setFrame] = useState<IOption>(frameOptions[0]);
  const [dere, setDere] = useState<IOption>(dereOptions[0]);
  const [frameStats, setFrameStats] = useState<boolean>(false);

  const handleSelectFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      Array.from(e.target.files).forEach(file => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          setImagesSrc(oldState => [...oldState, reader.result] as string[]);
          setCroppedAreasPixels(oldState => [
            ...oldState,
            { width: 0, height: 0, x: 0, y: 0 },
          ]);
        });
        reader.readAsDataURL(file);
      });
    }
  };

  const handleRemoveFromPreview = (index: number) => {
    setImagesSrc(imagesSrc.filter((img: string, idx: number) => idx !== index));
    setCroppedAreasPixels(
      croppedAreasPixels.filter(
        (croppedAreaPixels: Area, idx: number) => idx !== index,
      ),
    );
  };

  const handleUpdateCroppedAreaPixels = (
    index: number,
    croppedAreaPixels: Area,
  ) => {
    setCroppedAreasPixels(oldState => {
      oldState[index] = croppedAreaPixels;

      return oldState;
    });
  };

  const handleSaveImage = (index: number) => {
    try {
      getCroppedImg(imagesSrc[index], croppedAreasPixels[index], 0).then(
        (image: string) => {
          download(
            image,
            `image-${index + 1}-${format(new Date(), 'yyyyMMddHHmmss')}`,
            'image/jpeg',
          );
        },
      );
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
        imagesSrc={imagesSrc}
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
