import clsx from 'clsx';
import React from 'react';
import './Button.scss';

type ButtonProps = {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disable?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  disable,
  className,
  children,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={clsx('button', className)}>
      <button disabled={disable} type="button">
        {text || children}
      </button>
    </div>
  );
};

export default Button;
