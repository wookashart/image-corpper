export interface IDropdownSelect {
  label: string;
  value: IOption;
  options: IOption[];
  handleChange: (value: Ioption) => void;
}

export interface IOption {
  label: string;
  value: string;
}