import { Logo, NavStyled, StyledLink } from './NavigationStyled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../Redux/selectors';

export const Nav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavStyled>
      <Logo to="/">Phonebook</Logo>
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
