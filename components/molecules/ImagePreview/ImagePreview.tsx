'use client';

import { FC } from 'react';

import Button from '@/atoms/Button/Button';
import IconSettings from '@/atoms/Icons/IconSettings';
import IconTrash from '@/atoms/Icons/IconTrash';
import { IImagePreview } from '@/molecules/ImagePreview/ImagePreview.d';

const ImagePreview: FC<IImagePreview> = ({
  dere,
  frame,
  img,
  stats,
  handleRemove,
  handleOpenSettings,
}) => {
  return (
    <div className="group relative">
      <div className="relative">
        <img src={img} alt="" className="w-[220px] h-[309px] object-cover" />
        {frame !== 'none' && (
          <img
            src={`images/border/${frame}.png`}
            alt={frame}
            className="absolute z-10 max-w-none -top-[5px] -left-[5px] w-[230px] h-[320px] pointer-events-none"
          />
        )}
        {frame !== 'none' && dere !== 'none' && (
          <img
            src={`images/dere/${dere}.png`}
            alt={dere}
            className="absolute z-10 max-w-none -top-[5px] -left-[5px] w-[230px] h-[320px] pointer-events-none"
          />
        )}
        {frame !== 'none' && !!stats && (
          <img
            src="images/stats/fire.png"
            alt="stat fire"
            className="absolute z-10 max-w-none -top-[5px] -left-[5px] w-[230px] h-[320px] pointer-events-none"
          />
        )}
        {frame !== 'none' && !!stats && (
          <img
            src="images/stats/heart.png"
            alt="stat heart"
            className="absolute z-10 max-w-none -top-[5px] -left-[5px] w-[230px] h-[320px] pointer-events-none"
          />
        )}
        {frame !== 'none' && !!stats && (
          <img
            src="images/stats/shield.png"
            alt="stat shield"
            className="absolute z-10 max-w-none -top-[5px] -left-[5px] w-[230px] h-[320px] pointer-events-none"
          />
        )}
      </div>
      <div className="flex gap-2 absolute top-[5px] left-[5px] z-20 opacity-0 invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible">
        <Button handleClick={handleOpenSettings}>
          <IconSettings />
        </Button>
        <Button variant="error" handleClick={handleRemove}>
          <IconTrash />
        </Button>
      </div>
    </div>
  );
};

export default ImagePreview;
