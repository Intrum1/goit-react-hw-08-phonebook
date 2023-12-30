import React, { useEffect, useState } from 'react';
import { NavStyled, StyledLink } from './NavigationStyled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../Redux/selectors';
import { toast } from 'react-hot-toast';

export const Nav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isLogininSuccessNotified, setIsLogininSuccessNotified] =
    useState(false);

  useEffect(() => {
    if (isLoggedIn && !isLogininSuccessNotified) {
      toast.success('You are logged in!');
      setIsLogininSuccessNotified(true);
    } else if (!isLoggedIn && isLogininSuccessNotified) {
      toast.error('You are logged out!');
      setIsLogininSuccessNotified(false);
    }
  }, [isLoggedIn, isLogininSuccessNotified]);

  return (
    <NavStyled>
      {isLoggedIn ? (
        <>
          <StyledLink to="/contacts">Contacts</StyledLink>
          <UserMenu />
        </>
      ) : (
        <>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </>
      )}
    </NavStyled>
  );
};
