'use client';

import { FC } from 'react';

import { ICheckbox } from '@/atoms/Checkbox/Checkbox.d';

const Checkbox: FC<ICheckbox> = ({ id, label, value, handleChange }) => {
  return (
    <div className="flex gap-5 items-center">
      <input
        id={id}
        type="checkbox"
        checked={value}
        onChange={() => handleChange(!value)}
        className="absolute p-0 border-0 h-[1px] w-[1px] overflow-hidden opacity-0"
      />
      <label
        htmlFor={id}
        className={`inline-block select-none cursor-pointer relative pl-[32px] transition-all duration-300 ease-in-out before:content-[''] before:absolute before:top-[4px] before:left-0 before:flex before:items-center before:justify-center before:w-[14px] before:h-[14px] before:border-[1px] before:border-solid before:border-border-subtle before:mr-[8px] before:transition-all before:duration-300 before:ease-in-out after:content-[''] after:absolute after:left-[6px] after:top-[1px] after:w-[7px] after:h-[13px] after:border-solid after:border-[2px] after:border-white after:border-t-0 after:border-l-0 after:rotate-45 after:opacity-0 after:transition-all after:duration-300 after:ease-in-out hover:before:border-background-secondary ${!!value && 'before:bg-background-secondary before:border-background-secondary after:opacity-100'}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
