import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../Redux/contacts/selectors';
import { addContact } from '../../Redux/operations';
import Notiflix from 'notiflix';
import { Container, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const arrContacts = contacts.items;

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'number') {
      setNumber(target.value);
    }
  };

  const handleSubmit = e => {
    if (!name || !number) {
      Notiflix.Notify.warning('Please write your name and number');
      return;
    }
    const isDuplicate = arrContacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      Notiflix.Notify.warning(`${name} is already in the contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <Container onSubmit={handleSubmit}>
      <label>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Name:"
          onChange={handleInputChange}
        />
      </label>
      <label>
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          onChange={handleInputChange}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </Container>
  );
};

export default ContactForm;
