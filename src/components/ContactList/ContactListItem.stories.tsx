import { Meta, Story } from '@storybook/react';

import { ContactListItem, type ContactListItemProps } from './ContactListItem';

const meta: Meta<ContactListItemProps> = {
  component: ContactListItem,
};
export default meta;

export const Default: Story<ContactListItemProps> = (args) => (
  <ContactListItem {...args} />
);
Default.args = {
  id: 1,
  firstName: 'John',
  lastName: 'Smith',
  phoneNumber: '123456789',
};
