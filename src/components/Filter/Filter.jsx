import { InputStyled } from './Filterstyled';
import { filterContact } from '../../Redux/contacts/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from '../../Redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilterValue);
  const handleOnChangeFilter = evt => {
    dispatch(filterContact(evt.currentTarget.value));
  };

  return (
    <>
      <h3>Find contacts by name</h3>
      <InputStyled type="text" value={value} onChange={handleOnChangeFilter} />
    </>
  );
};

export default Filter;
