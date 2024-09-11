'use client';

import { ChangeEvent, FC, useState } from 'react';
import { Area } from 'react-easy-crop';

import { IOption } from '@/atoms/DropdownSelect/DropdownSelect.d';
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
    const newCroppedAreasPixels: Area[] = [];

    croppedAreasPixels.forEach((area: Area, idx: number) => {
      if (idx === index) {
        newCroppedAreasPixels.push(croppedAreaPixels);
      } else {
        newCroppedAreasPixels.push(area);
      }
    });

    setCroppedAreasPixels(newCroppedAreasPixels);
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
      />
    </div>
  );
};

export default MultipleImagesCropper;
