'use client';

import { ChangeEvent, FC, useState } from 'react';

import { IOption } from '@/atoms/DropdownSelect/DropdownSelect.d';
import { dereOptions, frameOptions } from '@/lib/helpers';
import MultiImagesNav from '@/molecules/MultiImagesNav/MultiImagesNav';
import { IMultipleImagesCropper } from '@/organisms/MultipleImagesCropper/MultipleImagesCropper.d';

const MultipleImagesCropper: FC<IMultipleImagesCropper> = () => {
  const [imagesSrc, setImagesSrc] = useState<string[]>([]);
  const [frame, setFrame] = useState<IOption>(frameOptions[0]);
  const [dere, setDere] = useState<IOption>(dereOptions[0]);

  const handleSelectFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      Array.from(e.target.files).forEach(file => {
        const reader = new FileReader();
        reader.addEventListener('load', () =>
          setImagesSrc(oldState => [...oldState, reader.result] as string[]),
        );
        reader.readAsDataURL(file);
      });
    }
  };

  return (
    <div>
      <MultiImagesNav
        frame={frame}
        dere={dere}
        handleSelectFiles={handleSelectFiles}
        handleSelectFrame={setFrame}
        handleSelectDere={setDere}
      />
    </div>
  );
};

export default MultipleImagesCropper;
