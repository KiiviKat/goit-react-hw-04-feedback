import styled from 'styled-components';

export const OptionContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const OptionButton = styled.button`
  color: inherit;
  width: 100px;
  padding: 8px;
  font-size: 20px;
  text-transform: capitalize;
  border: 2px solid DarkSlateBlue;
  border-radius: 4px;
  background-color: Plum;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: DarkSlateBlue;
    color: white;
  }
`;
