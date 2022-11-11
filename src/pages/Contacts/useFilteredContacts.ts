import { useMemo, useState } from 'react';

import { type Contact } from '../../types/contact';

export const useFilteredContacts = (contacts: Contact[]) => {
  const [search, setSearch] = useState('');

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.lastName.toLowerCase().includes(search.toLowerCase()),
      ),
    [contacts, search],
  );

  return { search, setSearch, filteredContacts };
};
