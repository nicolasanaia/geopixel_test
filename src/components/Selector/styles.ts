import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemList = styled.select`
  margin-top: 16px;
  font-size: 16px;
`;

export const Input = styled.input`
  margin-top: 16px;
  font-size: 16px;
`;

export const Button = styled.button`
  margin-top: 16px;
  padding: 3px;
  margin: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 1rem;
`;

export const SelectedItem = styled.div`
  margin-top: 16px;
  font-size: 16px;
  color: var(--text-color);
`;
