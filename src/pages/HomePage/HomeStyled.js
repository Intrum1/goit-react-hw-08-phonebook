import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeStyled = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const LinkStyled = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

export const LogLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  p {
    margin: 0 10px;
    font-weight: bold;
  }
`;
