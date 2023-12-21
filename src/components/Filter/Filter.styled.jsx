import styled from 'styled-components';
export const FilterContainer = styled.div`
  max-width: 300px;
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-size: 16px;
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;
