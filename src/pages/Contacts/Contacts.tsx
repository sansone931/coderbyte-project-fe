import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  Button,
  ContactList,
  ContactsHeader,
  Input,
  Modal,
} from '../../components';
import { ContactsForm } from './ContactsForm';
import {
  useContacts,
  useCreateContact,
  useDeleteContact,
  useFilteredContacts,
  useUpdateContact,
} from './hooks';
import { type ContactFormData } from './types';

const defaultContactFormValues: ContactFormData = {
  id: null,
  firstName: '',
  lastName: '',
  phoneNumber: '',
};

export const Contacts: FC = () => {
  const { contacts, isLoading, isError } = useContacts();
  const { createContact, createIsLoading } = useCreateContact();
  const { updateContact, updateIsLoading } = useUpdateContact();
  const { deleteContact, deleteIsLoading } = useDeleteContact();

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [idForDeletion, setIdForDeletion] = useState<number | null>(null);

  const { search, handleChangeSearch, filteredContacts } =
    useFilteredContacts(contacts);

  const { register, handleSubmit, formState, reset, getValues } =
    useForm<ContactFormData>({
      defaultValues: defaultContactFormValues,
      mode: 'all',
    });

  const handleFormModalClose = () => {
    setIsFormModalOpen(false);
  };

  const handleContactAddClick = () => {
    reset(defaultContactFormValues);
    setIsFormModalOpen(true);
  };

  const handleContactEditClick = (id: number) => {
    const contact = filteredContacts.find((c) => c.id === id);

    if (!contact) throw new Error(`Contact with id='${id}' not found`);

    reset({
      id: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      phoneNumber: contact.phoneNumber,
    });
    setIsFormModalOpen(true);
  };

  const handleContactDeleteClick = (id: number) => {
    setIdForDeletion(id);
  };

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    if (data.id) {
      await updateContact(data);
    } else {
      await createContact(data);
    }

    handleFormModalClose();
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

      {isLoading && <p>Loading...</p>}
      {isError && (
        <p>There was a problem while fetching the list of contacts</p>
      )}

      {filteredContacts.length > 0 && (
        <ContactList
          contacts={filteredContacts}
          onContactEditClick={handleContactEditClick}
          onContactDeleteClick={handleContactDeleteClick}
        />
      )}

      <Modal
        isOpen={isFormModalOpen}
        onClose={() => {
          if (!createIsLoading && !updateIsLoading) handleFormModalClose();
        }}
      >
        <ContactsForm
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          formState={formState}
          isAdding={getValues('id') === null}
          isLoading={createIsLoading || updateIsLoading}
        />
      </Modal>

      <Modal
        isOpen={idForDeletion !== null}
        onClose={() => {
          if (!deleteIsLoading) {
            setIdForDeletion(null);
          }
        }}
      >
        <p>Confirm deletion?</p>
        <Button
          type="button"
          variant="danger"
          disabled={deleteIsLoading}
          onClick={async () => {
            if (idForDeletion !== null) await deleteContact(idForDeletion);
            setIdForDeletion(null);
          }}
        >
          {deleteIsLoading ? 'Deleting...' : 'Delete'}
        </Button>
      </Modal>
    </main>
  );
};
