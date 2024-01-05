import { ContactsDivStyled } from './ContactsStyled';
import ContactItem from 'components/ContactItem/ContactItem';
import { deleteContactThunk } from '../../Redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../Redux/selectors';

function Contacts() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);
  const onRemoveContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };
  return (
    <>
      <ContactsDivStyled>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onRemoveContact={onRemoveContact}
            />
          );
        })}
      </ContactsDivStyled>
    </>
  );
}

export default Contacts;
