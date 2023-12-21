import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactSlise';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
