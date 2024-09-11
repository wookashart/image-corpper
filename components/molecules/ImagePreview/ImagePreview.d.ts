import { Area } from "react-easy-crop";

export interface IImagePreview {
  img: string;
  frame: string;
  dere: string;
  stats: boolean;
  index: number;
  handleRemove: () => void;
  handleUpdateCroppedAreaPixels: (index: number, croppedAreaPixels: Area) => void;
}