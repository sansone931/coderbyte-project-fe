import { FC, ReactNode } from 'react';

import { StyledButton } from './styled';
import { ButtonVariant } from './types';

export type ButtonProps = {
  variant: ButtonVariant;
  onClick: () => void;
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ variant, onClick, children }) => (
  <StyledButton $variant={variant} onClick={onClick}>
    {children}
  </StyledButton>
);
