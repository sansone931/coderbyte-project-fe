import { FC, HTMLInputTypeAttribute } from 'react';

import { StyledInput } from './styled';

export type InputProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};

export const Input: FC<InputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
}) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
