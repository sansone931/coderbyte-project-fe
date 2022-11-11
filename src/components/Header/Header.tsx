import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type Variant = 'primary' | 'secondary';

const StyledHeader = styled.h1<{ variant: Variant }>`
  color: ${({ theme, variant }) => theme.colors[variant]};
`;

export type HeaderProps = {
  variant?: Variant;
  children: ReactNode;
};

export const Header: FC<HeaderProps> = ({ variant = 'primary', children }) => (
  <StyledHeader variant={variant}>{children}</StyledHeader>
);
