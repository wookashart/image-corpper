'use client';

import { motion } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';
import { Area } from 'react-easy-crop';

import Button from '@/atoms/Button/Button';
import Checkbox from '@/atoms/Checkbox/Checkbox';
import DropdownSelect from '@/atoms/DropdownSelect/DropdownSelect';
import { IOption } from '@/atoms/DropdownSelect/DropdownSelect.d';
import IconClose from '@/atoms/Icons/IconClose';
import IconReset from '@/atoms/Icons/IconReset';
import Slider from '@/atoms/Slider/Slider';
import { dereOptions, frameOptions } from '@/lib/helpers';
import { IImageCropperPopup } from '@/molecules/ImageCropperPopup/ImageCropperPopup.d';

import ImageCropper from '../ImageCropper/ImageCropper';

const ImageCropperPopup: FC<IImageCropperPopup> = ({
  imageSrc,
  index,
  open,
  handleCloseModal,
  handleChangeCroppedArea,
  handleUpdateCroppedAreaPixels,
}) => {
  const [zoom, setZoom] = useState<number>(1);
  const [frame, setFrame] = useState<IOption>(frameOptions[0]);
  const [dere, setDere] = useState<IOption>(dereOptions[0]);
  const [frameStats, setFrameStats] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // close menu when click mouse outside
    let mouseHandler = (e: MouseEvent): void => {
      if (!modalRef?.current?.contains(e.target as Node)) {
        handleCloseModal();
      }
    };

    // close menu when press "escape" on keyboard
    let keyHandler = (e: KeyboardEvent): void => {
      if (e.code === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('mousedown', mouseHandler);
    document.addEventListener('keydown', keyHandler);

    return () => {
      document.removeEventListener('mousedown', mouseHandler);
      document.removeEventListener('keydown', keyHandler);
    };
  });

  return (
    <motion.div
      animate={open ? 'open' : 'close'}
      variants={{
        open: { opacity: 1, visibility: 'visible', pointerEvents: 'auto' },
        close: { opacity: 0, visibility: 'hidden', pointerEvents: 'none' },
      }}
      initial={{ opacity: 0, visibility: 'hidden' }}
      className="fixed top-0 bottom-0 left-0 right-0 z-[9999] flex items-center justify-center bg-background-modal"
    >
      <div
        ref={modalRef}
        className="relative p-[50px] bg-background-primary flex gap-10 shadow-lg"
      >
        <button
          className="absolute top-[10px] right-[15px]"
          onClick={handleCloseModal}
        >
          <IconClose />
        </button>

        <ImageCropper
          imageSrc={imageSrc}
          zoom={zoom}
          dere={dere.value}
          frame={frame.value}
          stats={frameStats}
          handlePreviewUpdate={(croppedArea: Area, croppedAreaPixels: Area) => {
            handleUpdateCroppedAreaPixels(index, croppedAreaPixels);
            handleChangeCroppedArea(croppedArea);
          }}
          handleZoomChange={(value: number) => setZoom(value)}
        />
        <div className="min-w-[300px] flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-text-default underline">Image customization:</p>
            <div className="flex gap-5 items-center">
              <div className="flex-1">
                <Slider
                  label="Zoom"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  handleChange={(value: number | number[]) =>
                    setZoom(value as number)
                  }
                />
              </div>
              <Button handleClick={() => setZoom(1)}>
                <IconReset />
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-text-default underline">Frame customization:</p>
            <DropdownSelect
              id={`popup-frame-${index}`}
              label="Frame"
              value={frame}
              handleChange={(value: IOption) => setFrame(value)}
              options={frameOptions}
            />
            <DropdownSelect
              id={`popup-dere-${index}`}
              label="Dere"
              value={dere}
              handleChange={(value: IOption) => setDere(value)}
              options={dereOptions}
            />
            <Checkbox
              id={`popup-frame-stats-${index}`}
              label="Show statistics"
              value={frameStats}
              handleChange={() => setFrameStats(!frameStats)}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageCropperPopup;
