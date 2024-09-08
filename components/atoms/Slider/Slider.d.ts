export interface ISlider {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  handleChange: (value: number | number[]) => void;
}