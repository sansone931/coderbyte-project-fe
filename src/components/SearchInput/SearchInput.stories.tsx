import { Meta, Story } from '@storybook/react';

import { SearchInput, type SearchInputProps } from './SearchInput';

const meta: Meta<SearchInputProps> = {
  component: SearchInput,
};
export default meta;

export const Default: Story<SearchInputProps> = (args) => (
  <SearchInput {...args} />
);
Default.args = {
  value: 'Smith',
};
