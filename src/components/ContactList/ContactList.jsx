import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectContacts } from '../../Redux/contacts/selectors';
import { deleteContact } from '../../Redux/operations';
import { List, ListItem, DeleteButton } from './ContactList.styled';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const { contacts } = useSelector(selectContacts);

  let normalized = filter ? filter.toLowerCase() : '';
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalized)
  );
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton type="text" onClick={() => deleteContact(contact.id)}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
