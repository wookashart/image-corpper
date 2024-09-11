export interface IImagePreview {
  img: string;
  frame: string;
  dere: string;
  stats: boolean;
  handleRemove: () => void;
  handleOpenSettings: () => void;
}