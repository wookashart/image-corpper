export interface ICheckbox {
  id: string;
  label: string;
  value: boolean;
  handleChange: (value: boolean) => void;
}