import { IOption } from "@/atoms/DropdownSelect/DropdownSelect.d";
import { Area } from "react-easy-crop";

export interface IMultiImagesPreview {
  imagesSrc: string[];
  frame: IOption;
  dere: IOption;
  stats: boolean;
  handleRemoveFromPreview: (index: number) => void;
  handleUpdateCroppedAreaPixels: (index: number, croppedAreaPixels: Area) => void;
  handleSaveImage: (index: number) => void
}