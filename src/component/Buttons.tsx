import { ButtonHTMLAttributes, FC, memo } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  theme: 'blue';
  className?: string;
}

const Button: FC<Props> = ({ children, theme, className, ...rest }) => {
  const themeClass =
    theme === 'blue' ? ' bg-blue-500 px-4 py-2 text-white rounded-md ' : '';
  return <button {...rest} className={themeClass + className}>{children}</button>;
};

Button.defaultProps = {};

export default memo(Button);
