import { Area } from "react-easy-crop";

export interface IImageCropper {
  imageSrc: string;
  zoom: number;
  rotation: number;
  handlePreviewUpdate: (croppedAreaPixels: Area) => void;
  handleZoomChange: (zoom: number) => void;
}