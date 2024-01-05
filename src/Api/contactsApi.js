import toast from 'react-hot-toast';
import { instance } from './api';

export const getApiContact = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const postApiContact = async formData => {
  console.log(formData);
  const { data } = await instance.post('/contacts', formData);
  toast.success('Контакт додано');
  return data;
};

export const deleteApiContact = async contactId => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  toast.success('Контакт видалено');
  return data;
};
