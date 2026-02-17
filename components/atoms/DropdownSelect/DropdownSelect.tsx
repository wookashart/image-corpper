'use client';

import dynamic from 'next/dynamic';

import { IDropdownSelect } from '@/atoms/DropdownSelect/DropdownSelect.d';

const DropdownSelectClient = dynamic(
  () => import('./DropdownSelectClient').then(mod => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-1 items-center gap-2">
        <span className="min-w-[50px] opacity-0">…</span>
        <div className="h-[38px] flex-1 rounded-none border border-gray-300 bg-gray-100" />
      </div>
    ),
  }
);

const DropdownSelect: React.FC<IDropdownSelect> = ({
  label,
  inline = false,
  ...rest
}) => {
  return (
    <div className={`flex items-center ${!inline ? 'gap-2' : 'gap-5'}`}>
      <label className={`text-text-default ${!inline && 'min-w-[50px]'}`}>
        {label}
      </label>
      <DropdownSelectClient label={label} inline={inline} {...rest} />
    </div>
  );
};

export default DropdownSelect;
