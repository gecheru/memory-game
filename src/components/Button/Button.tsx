import React, { FC, ReactNode } from 'react';
import './Button.css';

interface Props {
  onClick: () => void;
  children: ReactNode;
}

export const Button: FC<Props> = ({ onClick, children }) => {
  return (
    <button type="button" className="button" onClick={onClick}>
      {children}
    </button>
  );
};
