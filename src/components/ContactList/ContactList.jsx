import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  List,
  Item,
  ItemName,
  DeleteBtn,
  ContactAvatar,
} from './ContactList.styled';
import { selectContacts, selectFilter } from '../../Redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchAllContacts, deleteContact } from '../../Redux/api';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  let normalizedFilter = filter ? filter.toLowerCase() : '';
  const filteredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          <ContactAvatar $avatar={contact.avatar}></ContactAvatar>
          <ItemName>{contact.name}</ItemName>
          <span>{contact.phone}</span>
          <DeleteBtn onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};
