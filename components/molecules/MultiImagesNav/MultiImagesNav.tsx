'use client';

import { FC } from 'react';

import DropdownSelect from '@/atoms/DropdownSelect/DropdownSelect';
import FileInput from '@/atoms/FileInput/FileInput';
import { dereOptions, frameOptions } from '@/lib/helpers';
import { IMultiImagesNav } from '@/molecules/MultiImagesNav/MultiImagesNav.d';

const MultiImagesNav: FC<IMultiImagesNav> = ({
  dere,
  frame,
  handleSelectFiles,
  handleSelectDere,
  handleSelectFrame,
}) => {
  return (
    <div className="container mx-auto mt-[10px] md:mt-[30px] flex gap-3 md:gap-10 justify-center flex-wrap">
      <FileInput multiple handleChange={handleSelectFiles} />
      <div className="min-w-[200px]">
        <DropdownSelect
          inline
          label="Frame"
          value={frame}
          options={frameOptions}
          handleChange={handleSelectFrame}
        />
      </div>
      <div className="min-w-[200px]">
        <DropdownSelect
          inline
          label="Dere"
          value={dere}
          options={dereOptions}
          handleChange={handleSelectDere}
        />
      </div>
    </div>
  );
};

export default MultiImagesNav;
