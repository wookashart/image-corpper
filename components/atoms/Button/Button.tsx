'use client';

import { FC } from 'react';

import { IButton } from '@/atoms/Button/Button.d';

const Button: FC<IButton> = ({
  children,
  type = 'button',
  disabled = false,
  variant = 'default',
  handleClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`text-text-default p-[5px] border-solid border-[1px] shadow-xl transition-all duration-300 ease-in-out hover:bg-background-primary ${variant === 'error' ? 'bg-background-error border-background-error' : 'bg-background-secondary border-background-secondary'} ${!!disabled && 'pointer-events-none bg-background-disabled border-background-disabled opacity-30'}`}
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
