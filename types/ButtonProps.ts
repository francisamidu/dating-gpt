type ButtonProps = {
  classNames?: string;
  text: string;
  icon?: JSX.Element;
  onClick?: (() => void) | ((e: any) => Promise<any>);
  iconPosition?: "left" | "right";
};

export type { ButtonProps };
