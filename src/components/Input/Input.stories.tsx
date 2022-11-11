import { Meta, Story } from '@storybook/react';

import { Input, type InputProps } from './Input';

const meta: Meta<InputProps> = {
  component: Input,
};
export default meta;

export const Default: Story<InputProps> = (args) => <Input {...args} />;
Default.args = {
  name: 'input',
  value: 'Smith',
};
