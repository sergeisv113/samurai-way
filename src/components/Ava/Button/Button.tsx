import s from './Button.module.scss';
import React from "react";

interface ButtonProps {
  children: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export const Button = ({ children, onClick }: ButtonProps) => (
  <button className={s.button} onClick={onClick}>
    {children}
  </button>
);
