'use client';

import Slider from '@/components/atoms/Slider/Slider';
import { format } from 'date-fns';
import download from 'downloadjs';
import { ChangeEvent, FC, useState } from 'react';
import { Area } from 'react-easy-crop';

import Button from '@/atoms/Button/Button';
import Checkbox from '@/atoms/Checkbox/Checkbox';
import DropdownSelect from '@/atoms/DropdownSelect/DropdownSelect';
import { IOption } from '@/atoms/DropdownSelect/DropdownSelect.d';
import FileInput from '@/atoms/FileInput/FileInput';
import IconDownload from '@/atoms/Icons/IconDownload';
import IconReset from '@/atoms/Icons/IconReset';
import getCroppedImg from '@/lib/cropper';
import { dereOptions, frameOptions } from '@/lib/helpers';
import ImageCropper from '@/molecules/ImageCropper/ImageCropper';
import { IOneImageCropper } from '@/organisms/OneImageCropper/OneImageCropper.d';

const OneImageCropper: FC<IOneImageCropper> = () => {
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [frame, setFrame] = useState<IOption>(frameOptions[0]);
  const [dere, setDere] = useState<IOption>(dereOptions[0]);
  const [frameStats, setFrameStats] = useState<boolean>(false);

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setImageSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSaveImage = () => {
    try {
      getCroppedImg(imageSrc as string, croppedAreaPixels as Area, 0).then(
        (image: string) => {
          download(
            image,
            `image-${format(new Date(), 'yyyyMMddHHmmss')}`,
            'image/jpeg',
          );
        },
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-2 container m-auto gap-[50px] mt-10">
      <div className="ml-auto">
        <ImageCropper
          imageSrc={imageSrc as string}
          zoom={zoom}
          frame={frame.value}
          dere={dere.value}
          stats={frameStats}
          handlePreviewUpdate={(croppedAreaPixels: Area) =>
            setCroppedAreaPixels(croppedAreaPixels)
          }
          handleZoomChange={(value: number) => setZoom(value)}
        />
      </div>
      <div className="max-w-[400px] flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-text-default underline">Add image:</p>
          <FileInput handleChange={handleSelectFile} />
        </div>

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
            id="single-frame-select"
            label="Frame"
            value={frame}
            handleChange={(value: IOption) => setFrame(value)}
            options={frameOptions}
          />
          <DropdownSelect
            id="single-dere-select"
            label="Dere"
            value={dere}
            handleChange={(value: IOption) => setDere(value)}
            options={dereOptions}
          />
          <Checkbox
            id="frame-stats"
            label="Show statistics"
            value={frameStats}
            handleChange={() => setFrameStats(!frameStats)}
          />
        </div>

        <div>
          <Button
            disabled={!imageSrc || imageSrc === ''}
            handleClick={handleSaveImage}
          >
            <span className="flex gap-2 px-5 py-1">
              <IconDownload /> Download image
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OneImageCropper;
