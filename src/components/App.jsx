import React from 'react';
import ContactForm from './ContactForm/ContactFofm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppContainer, Subtitle, Title } from './App.styles';

export const App = () => {
  return (
    <AppContainer>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};
