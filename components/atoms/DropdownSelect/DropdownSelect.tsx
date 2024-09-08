'use client';

import { FC } from 'react';
import Select from 'react-select';

import { IDropdownSelect } from '@/atoms/DropdownSelect/DropdownSelect.d';

const DropdownSelect: FC<IDropdownSelect> = ({
  label,
  options,
  value,
  handleChange,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <label className="text-text-default min-w-[50px]">{label}</label>
      <Select
        value={value}
        options={options}
        classNames={{
          container: () => 'flex-1',
          control: () =>
            '!rounded-none hover:!border-background-secondary !shadow-none transition-all duration-300 ease-in-out',
          dropdownIndicator: () => '[&>svg]:!fill-background-secondary',
          indicatorSeparator: () => 'hidden',
          option: state =>
            state.isSelected
              ? '!text-text-default !bg-background-secondary'
              : '!text-text-default-negative',
        }}
        onChange={handleChange}
      />
    </div>
  );
};

export default DropdownSelect;
