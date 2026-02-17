import { IOption } from '@/atoms/DropdownSelect/DropdownSelect.d';
import { Area } from 'react-easy-crop';

export type ImageItem = { id: string; src: string };

export interface IMultiImagesPreview {
  images: ImageItem[];
  frame: IOption;
  dere: IOption;
  stats: boolean;
  handleRemoveFromPreview: (index: number) => void;
  handleUpdateCroppedAreaPixels: (index: number, croppedAreaPixels: Area) => void;
  handleSaveImage: (index: number) => void;
}