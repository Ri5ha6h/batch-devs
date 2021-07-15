import { FC, memo } from 'react';

interface Props {
  children: string;
  theme: 'blue';
  className?: string;
}

const Button: FC<Props> = ({ children, theme, className }) => {
  const themeClass =
    theme === 'blue' ? ' bg-blue-500 px-4 py-2 text-white rounded-md ' : '';
  return <button className={themeClass + className}>{children}</button>;
};

Button.defaultProps = {};

export default memo(Button);
