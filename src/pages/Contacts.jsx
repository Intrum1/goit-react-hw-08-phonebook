import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchAll } from '../Redux/Slices/rootSlice';
import FormList from '../components/Loader/Loader';
import ContactList from '../components/ContactItem/ContactItem';
import Filter from '../components/Filter/Filter';
import GlobalTitle from '../components/Layout/Title';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  return (
    <>
      <HelmetProvider>
        <GlobalTitle title="Phonebook" />
        <FormList />
        <GlobalTitle title="Contacts" />
        <Filter />
        <ContactList />
        <ToastContainer />
      </HelmetProvider>
    </>
  );
};

export default Contacts;
