import { Meta, Story } from '@storybook/react';

import { ContactList, type ContactListProps } from './ContactList';

const meta: Meta<ContactListProps> = {
  component: ContactList,
};
export default meta;

export const Default: Story<ContactListProps> = (args) => (
  <ContactList {...args} />
);
Default.args = {
  contacts: [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Smith',
      phoneNumber: '123456789',
    },
    {
      id: '2',
      firstName: 'Steve',
      lastName: 'Jobs',
      phoneNumber: '987654321',
    },
    {
      id: '3',
      firstName: 'Bill',
      lastName: 'Gates',
      phoneNumber: '543216789',
    },
  ],
};
