'use client';

import { FC } from 'react';

import Checkbox from '@/atoms/Checkbox/Checkbox';
import DropdownSelect from '@/atoms/DropdownSelect/DropdownSelect';
import FileInput from '@/atoms/FileInput/FileInput';
import { dereOptions, frameOptions } from '@/lib/helpers';
import { IMultiImagesNav } from '@/molecules/MultiImagesNav/MultiImagesNav.d';

const MultiImagesNav: FC<IMultiImagesNav> = ({
  dere,
  frame,
  frameStats,
  handleSelectFiles,
  handleSelectDere,
  handleSelectFrame,
  handleToggleStats,
}) => {
  return (
    <div className="container mx-auto mt-[10px] md:mt-[30px] flex gap-3 md:gap-10 justify-center flex-wrap relative z-[9999]">
      <FileInput multiple handleChange={handleSelectFiles} />
      <div className="min-w-[200px]">
        <DropdownSelect
          id="multi-nav-frame-select"
          inline
          label="Frame"
          value={frame}
          options={frameOptions}
          handleChange={handleSelectFrame}
        />
      </div>
      <div className="min-w-[200px]">
        <DropdownSelect
          id="multi-nav-dere-select"
          inline
          label="Dere"
          value={dere}
          options={dereOptions}
          handleChange={handleSelectDere}
        />
      </div>
      <div className="min-w-[200px] flex items-center">
        <Checkbox
          id="multi-nav-frame-stats"
          label="Show statistics"
          value={frameStats}
          handleChange={() => handleToggleStats(!frameStats)}
        />
      </div>
    </div>
  );
};

export default MultiImagesNav;
