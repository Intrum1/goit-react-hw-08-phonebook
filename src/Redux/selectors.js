import { createSelector } from '@reduxjs/toolkit';
import { selectContacts, selectFilterValue } from './contacts/selectors';

export * from './auth/selectors';
export * from './contacts/selectors';
export * from './root/selectors';

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
