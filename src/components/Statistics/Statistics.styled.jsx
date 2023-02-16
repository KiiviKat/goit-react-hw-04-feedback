import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: end;
  list-style: square;
  padding: 0;
  margin: 20px 0;
`;

export const Item = styled.li`
  width: 260px;
  margin: 0 auto;
  text-align: left;
`;

export const Text = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
