import { Meta, Story } from '@storybook/react';

import { Button, type ButtonProps } from './Button';

type Args = ButtonProps;

const meta: Meta<Args> = {
  component: Button,
  args: {
    children: 'Click Me',
    type: 'button',
  },
};
export default meta;

const Template: Story<Args> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};
