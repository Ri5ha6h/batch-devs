import { FC, InputHTMLAttributes, memo } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelContent: string;
  inputName: string;
  className?: string;
  placeholder: string;
}

const Input: FC<Props> = ({
  labelContent,
  inputName,
  className,
  placeholder,
  ...rest
}) => {
  return (
    <>
      <label htmlFor={inputName} className="sr-only">
        {labelContent}
      </label>
      <input
        {...rest}
        id={inputName}
        name={inputName}
        placeholder={placeholder}
        required
        className={
          'w-full placeholder-gray-400 border-b focus:border-blue-500 focus:outline-none text-sm px-3 py-3 ' +
          className
        }
      />
    </>
  );
};

Input.defaultProps = {};

export default memo(Input);
