import { ChangeEventHandler, FC, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  Button,
  ContactList,
  ContactsHeader,
  Input,
  Modal,
} from '../../components';
import { Contact } from '../../types/contact';

const mockContacts: Contact[] = [
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
];

type ContactFormData = {
  id: string | null;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

const defaultContactFormValues: ContactFormData = {
  id: null,
  firstName: '',
  lastName: '',
  phoneNumber: '',
};

export const Contacts: FC = () => {
  const [contacts, setContacts] = useState(mockContacts);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { register, handleSubmit, formState, reset, getValues } =
    useForm<ContactFormData>({
      defaultValues: defaultContactFormValues,
      mode: 'all',
    });

  const firstName = register('firstName', {
    required: 'This field is required',
  });
  const lastName = register('lastName', { required: 'This field is required' });
  const phoneNumber = register('phoneNumber', {
    required: 'This field is required',
    pattern: {
      value: /^[0-9]{9}$/g,
      message: 'Please enter a valid phone number',
    },
  });

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.lastName.toLowerCase().includes(search.toLowerCase()),
      ),
    [contacts, search],
  );

  const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleContactAddClick = () => {
    reset(defaultContactFormValues);
    setIsModalOpen(true);
  };

  const handleContactEditClick = (id: string) => {
    const contact = filteredContacts.find((c) => c.id === id);

    if (!contact) throw new Error(`Contact with id=${id} not found`);

    reset({
      id: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      phoneNumber: contact.phoneNumber,
    });
    setIsModalOpen(true);
  };

  const handleContactDeleteClick = (id: string) => {
    // TODO: delete contact
    console.log('Delete', id);
  };

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    // TODO: submit contact
    console.log('Submit', data);

    handleModalClose();
  };

  return (
    <main>
      <h1>Phone Book App</h1>

      <ContactsHeader onAddContactClick={handleContactAddClick} />

      <Input
        name="search"
        value={search}
        onChange={handleChangeSearch}
        placeholder="Search for contact by last name..."
      />

      {filteredContacts.length > 0 && (
        <ContactList
          contacts={filteredContacts}
          onContactEditClick={handleContactEditClick}
          onContactDeleteClick={handleContactDeleteClick}
        />
      )}

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>{getValues('id') === null ? 'Add' : 'Edit'} Contact</h2>
          <Input
            label="First Name"
            name={firstName.name}
            onChange={firstName.onChange}
            onBlur={firstName.onBlur}
            inputRef={firstName.ref}
            errorText={formState.errors.firstName?.message}
          />
          <Input
            label="Last Name"
            name={lastName.name}
            onChange={lastName.onChange}
            onBlur={lastName.onBlur}
            inputRef={lastName.ref}
            errorText={formState.errors.lastName?.message}
          />
          <Input
            label="Phone Number"
            name={phoneNumber.name}
            onChange={phoneNumber.onChange}
            onBlur={phoneNumber.onBlur}
            inputRef={phoneNumber.ref}
            errorText={formState.errors.phoneNumber?.message}
          />
          <Button type="submit" variant="primary" disabled={!formState.isValid}>
            Submit
          </Button>
        </form>
      </Modal>
    </main>
  );
};
