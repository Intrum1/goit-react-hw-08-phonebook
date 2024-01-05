import { ContactFormStyled } from './ContactFormStyled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../Redux/selectors';
import { addContactThunk } from '../../Redux/contacts/operations';

function ContactForm() {
  const [nameContact, setNameContact] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleOnChange = evt => {
    const { name, value } = evt.currentTarget;
    if (name === 'name') {
      setNameContact(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    const finded = contacts.find(contact => contact.name === nameContact);
    if (finded) {
      alert(`${nameContact} is already in contacts`);
      return;
    }
    dispatch(addContactThunk({ name: nameContact, number }));

    reset();
  };

  const reset = () => {
    setNameContact('');
    setNumber('');
  };

  return (
    <>
      <ContactFormStyled onSubmit={handleOnSubmit}>
        <label>
          <span>Name</span>
          <input
            value={nameContact}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleOnChange}
          />
        </label>
        <label>
          <span>Number</span>
          <input
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleOnChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </ContactFormStyled>
    </>
  );
}

export default ContactForm;
