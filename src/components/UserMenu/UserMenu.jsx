import React from 'react';
import { UserMenuStyled } from './UserMenuStyled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../Redux/selectors';
import { logOutThunk } from '../../Redux/Thunks/authThunk';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(logOutThunk());
  };

  return (
    <UserMenuStyled>
      <p>Hello, {userName}</p>
      <button type="submit" onClick={handleOnClick}>
        Logout
      </button>
    </UserMenuStyled>
  );
};
