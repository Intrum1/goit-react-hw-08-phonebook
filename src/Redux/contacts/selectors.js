export const selectContacts = ({ contacts }) => contacts.items;
export const selectIsLoading = ({ contacts }) => contacts.isLoading;
export const selectFilter = state => state.filter.filter;
