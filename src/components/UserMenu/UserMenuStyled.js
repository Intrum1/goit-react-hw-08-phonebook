import styled from 'styled-components';

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 10px;
    font-size: 16px;
    color: #fff;
  }

  button {
    background-color: #dc3545;
    color: #fff;
    padding: 8px 12px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #c82333;
    }
  }
`;
