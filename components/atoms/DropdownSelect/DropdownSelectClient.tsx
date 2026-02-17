'use client';

import { FC } from 'react';
import Select from 'react-select';

import { IDropdownSelect } from '@/atoms/DropdownSelect/DropdownSelect.d';

const DropdownSelectClient: FC<IDropdownSelect> = ({
  id,
  options,
  value,
  handleChange,
}) => {
  return (
    <Select
      id={id}
      instanceId={id}
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
  );
};

export default DropdownSelectClient;
