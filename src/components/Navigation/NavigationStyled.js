import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #007bff;
  padding: 10px 0;
  color: #fff;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
