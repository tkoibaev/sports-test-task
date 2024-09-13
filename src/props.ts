export type IconProps = React.SVGAttributes<SVGElement> & {
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  fill?: string;
  isActive?: boolean;
};
