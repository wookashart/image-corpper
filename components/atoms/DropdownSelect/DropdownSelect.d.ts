export interface IDropdownSelect {
  id: string;
  label: string;
  value: IOption;
  options: IOption[];
  inline?: boolean;
  handleChange: (value: Ioption) => void;
}

export interface IOption {
  label: string;
  value: string;
}