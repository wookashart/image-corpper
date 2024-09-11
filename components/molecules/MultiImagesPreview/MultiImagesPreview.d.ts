import { IOption } from "@/atoms/DropdownSelect/DropdownSelect.d";

export interface IMultiImagesPreview {
  imagesSrc: string[];
  frame: IOption;
  dere: IOption;
  stats: boolean;
  handleRemoveFromPreview: (index: number) => void;
}