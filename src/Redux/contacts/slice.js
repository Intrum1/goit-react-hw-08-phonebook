import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactThunk,
  addContactThunk,
  deleteContactThunk,
} from './operations';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
      }),
});

export const { filterContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
