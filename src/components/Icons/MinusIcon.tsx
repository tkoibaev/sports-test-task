import React from 'react';
import { IconProps } from '../../props';

const MinusIcon: React.FC<IconProps> = (
  {
    // className,
    // color,
    // width,
    // height,
    // onClick,
  }
) => {
  return (
    <svg
      width="12"
      height="2"
      viewBox="0 0 12 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect id="minus-activ copy" width="12" height="2" fill="#222222" />
    </svg>
  );
};

export default MinusIcon;
