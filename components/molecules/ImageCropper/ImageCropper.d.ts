import { Area } from "react-easy-crop";

export interface IImageCropper {
  imageSrc: string;
  zoom: number;
  frame?: string;
  dere?: string;
  stats?: boolean;
  handlePreviewUpdate: (croppedArea: Area, croppedAreaPixels: Area) => void;
  handleZoomChange: (zoom: number) => void;
}