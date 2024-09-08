'use client';

import { FC } from 'react';

import { IButton } from '@/atoms/Button/Button.d';

const Button: FC<IButton> = ({
  children,
  type = 'button',
  disabled = false,
  handleClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-background-secondary text-text-default p-[5px] border-solid border-[1px] border-background-secondary shadow-xl transition-all duration-300 ease-in-out hover:bg-background-primary ${!!disabled && 'pointer-events-none bg-background-disabled border-background-disabled opacity-30'}`}
      onClick={() => {
        if (!!disabled) return;

        handleClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
