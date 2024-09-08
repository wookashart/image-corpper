'use client';

import { IFileInput } from '@/components/atoms/FileInput/FileInput.d';
import { FC, RefObject, useRef } from 'react';

import IconUpload from '../Icons/IconUpload';

const FileInput: FC<IFileInput> = ({ multiple = false, handleChange }) => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  return (
    <div>
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        multiple={multiple}
        onChange={handleChange}
      />
      <button
        onClick={() => inputRef?.current?.click()}
        className="flex justify-center items-center gap-5 w-full bg-background-secondary text-text-default p-2 shadow-xl border-solid border-[1px] border-background-secondary transition-all duration-300 ease-in-out hover:bg-background-primary"
      >
        <IconUpload />
        {multiple ? 'Upload images' : 'Upload image'} from computer
      </button>
    </div>
  );
};

export default FileInput;
