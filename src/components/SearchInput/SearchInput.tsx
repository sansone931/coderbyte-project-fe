import { FC } from 'react';

import { StyledInput } from './styled';

export type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <StyledInput
      type="text"
      name="search"
      placeholder="Search for contact by last name..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
