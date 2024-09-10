import { IOption } from "@/atoms/DropdownSelect/DropdownSelect.d";

export interface IMultiImagesNav {
  frame: IOption;
  dere: IOption;
  handleSelectFiles: (event) => void;
  handleSelectFrame: (option: IOption) => void;
  handleSelectDere: (option: IOption) => void;
}