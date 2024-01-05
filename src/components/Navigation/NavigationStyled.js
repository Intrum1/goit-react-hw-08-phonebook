import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  color: #fff;
`;

export const Logo = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  margin-right: auto;
  cursor: pointer;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  margin-right: 10px;
  &.active {
    color: #745088;
  }
  &:hover {
    color: #745088;
  }
`;

export const Header = styled.header`
  background-color: #ff9b00;
  padding: 20px 0;
`;
