import { Area } from "react-easy-crop";

export interface IImageCropperPopup {
  imageSrc: string;
  index: number;
  open: boolean;
  handleChangeCroppedArea: (croppedArea: Area) => void;
  handleUpdateCroppedAreaPixels: (index: number, croppedAreaPixels: Area) => void;
  handleCloseModal: () => void;
}