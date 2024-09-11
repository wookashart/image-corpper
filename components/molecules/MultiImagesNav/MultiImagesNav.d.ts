import { IOption } from "@/atoms/DropdownSelect/DropdownSelect.d";

export interface IMultiImagesNav {
  frame: IOption;
  dere: IOption;
  frameStats: boolean;
  handleSelectFiles: (event) => void;
  handleSelectFrame: (option: IOption) => void;
  handleSelectDere: (option: IOption) => void;
  handleToggleStats: (value: boolean) => void;
}