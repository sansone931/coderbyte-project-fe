import { Meta, Story } from '@storybook/react';

import { ContactsHeader, type ContactsHeaderProps } from './ContactsHeader';

const meta: Meta<ContactsHeaderProps> = {
  component: ContactsHeader,
};
export default meta;

export const Default: Story<ContactsHeaderProps> = (args) => (
  <ContactsHeader {...args} />
);
