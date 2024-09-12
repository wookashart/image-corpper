'use client';

import { FC, useState } from 'react';
import { Area } from 'react-easy-crop';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import Button from '@/atoms/Button/Button';
import IconDownload from '@/atoms/Icons/IconDownload';
import IconSettings from '@/atoms/Icons/IconSettings';
import IconTrash from '@/atoms/Icons/IconTrash';
import PreviewOutput from '@/atoms/PreviewOutput/PreviewOutput';
import { IImagePreview } from '@/molecules/ImagePreview/ImagePreview.d';

import ImageCropperPopup from '../ImageCropperPopup/ImageCropperPopup';

const ImagePreview: FC<IImagePreview> = ({
  dere,
  frame,
  img,
  stats,
  index,
  handleRemove,
  handleUpdateCroppedAreaPixels,
  handleSaveImage,
}) => {
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <div className="group relative" key={img}>
        <div
          className={`relative ${!!croppedArea && 'border-[1px] border-background-secondary border-solid'}`}
        >
          {!!croppedArea ? (
            <PreviewOutput imgSrc={img} croppedArea={croppedArea} />
          ) : (
            <Skeleton className="!rounded-none !w-[220px] !h-[309px]" />
          )}

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
          <Button handleClick={() => handleSaveImage(index)}>
            <IconDownload />
          </Button>
          <Button handleClick={() => setModalOpened(true)}>
            <IconSettings />
          </Button>
          <Button
            variant="error"
            handleClick={() => {
              setCroppedArea(null);
              handleRemove();
            }}
          >
            <IconTrash />
          </Button>
        </div>
      </div>
      <ImageCropperPopup
        open={modalOpened}
        imageSrc={img}
        index={index}
        handleChangeCroppedArea={setCroppedArea}
        handleUpdateCroppedAreaPixels={handleUpdateCroppedAreaPixels}
        handleCloseModal={() => setModalOpened(false)}
      />
    </SkeletonTheme>
  );
};

export default ImagePreview;
