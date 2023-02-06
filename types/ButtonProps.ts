type ButtonProps = {
  classNames?: string;
  text: string;
  icon?: JSX.Element;
  onClick?: (arg: string) => void;
  param?: string;
  iconPosition?: "left" | "right";
};

export type { ButtonProps };
