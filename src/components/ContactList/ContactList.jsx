import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectContacts } from '../../Redux/contacts/selectors';
import { deleteContact, fetchContacts } from '../../Redux/operations';
import { useEffect } from 'react';
import { List, ListItem, ItemName, DeleteButton } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  let normalizedFilter = filter ? filter.toLowerCase() : '';
  const filteredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handlDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id}>
          <ItemName>{contact.name}</ItemName>
          <span>{contact.phone}</span>
          <DeleteButton
            type="text"
            onClick={() => handlDeleteContact(contact.id)}
          >
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
