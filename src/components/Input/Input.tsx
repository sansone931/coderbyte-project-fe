import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from 'react';
import { RefCallBack } from 'react-hook-form';

import { ErrorText, InputContainer, StyledInput } from './styled';

export type InputProps = {
  label?: string;
  errorText?: string;
  name: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  inputRef?: RefCallBack;
  type?: HTMLInputTypeAttribute;
};

export const Input: FC<InputProps> = ({
  label,
  errorText,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  inputRef,
  type = 'text',
}) => (
  <InputContainer>
    {label && <label htmlFor={name}>{label}</label>}
    <StyledInput
      hasError={!!errorText}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      ref={inputRef}
    />
    {errorText && <ErrorText>{errorText}</ErrorText>}
  </InputContainer>
);
