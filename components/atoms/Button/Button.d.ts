import React from "react";

export interface IButton {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'default' | 'error';
  handleClick: () => void;
}