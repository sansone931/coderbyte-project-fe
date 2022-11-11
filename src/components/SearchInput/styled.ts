import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.5rem;
  border-radius: 0.25rem;
  width: 100%;
  box-sizing: border-box;
`;
