'use client';

import 'rc-slider/assets/index.css';

import Slider from 'rc-slider';
import { FC } from 'react';

import { ISlider } from '@/atoms/Slider/Slider.d';

const SliderComponent: FC<ISlider> = ({
  label,
  value,
  min,
  max,
  step,
  handleChange,
}) => {
  return (
    <div className="flex items-center gap-5">
      <span>{label}</span>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="custom-slider"
      />
    </div>
  );
};

export default SliderComponent;
