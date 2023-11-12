import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`;

export const Item = styled.li`
  max-width: calc((100% - 54px) / 4);
`;
