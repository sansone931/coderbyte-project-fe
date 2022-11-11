import { ChangeEventHandler, FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ContactList, ContactsHeader, Input, Modal } from '../../components';
import { type Contact } from '../../types/contact';
import { ContactsForm } from './ContactsForm';
import { type ContactFormData } from './types';
import { useFilteredContacts } from './useFilteredContacts';

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

const defaultContactFormValues: ContactFormData = {
  id: null,
  firstName: '',
  lastName: '',
  phoneNumber: '',
};

export const Contacts: FC = () => {
  const [contacts, setContacts] = useState(mockContacts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { search, setSearch, filteredContacts } = useFilteredContacts(contacts);

  const { register, handleSubmit, formState, reset, getValues } =
    useForm<ContactFormData>({
      defaultValues: defaultContactFormValues,
      mode: 'all',
    });

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

    if (!contact) throw new Error(`Contact with id='${id}' not found`);

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
        <ContactsForm
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          formState={formState}
          isAdding={getValues('id') === null}
        />
      </Modal>
    </main>
  );
};
