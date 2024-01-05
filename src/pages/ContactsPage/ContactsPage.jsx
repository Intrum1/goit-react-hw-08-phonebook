import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { Section } from 'components/SectionStyled';

import { fetchContactThunk } from '../../Redux/contacts/operations';
import { selectError, selectIsLoading } from '../../Redux/selectors';

export const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactThunk());
  }, [dispatch]);

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {error && <>Oops... Error: {error}</>}
      <Contacts />
    </Section>
  );
};

export default ContactsPage;
