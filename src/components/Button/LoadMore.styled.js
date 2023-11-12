import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 3px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  margin: 24px auto;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  max-width: 160px;
  width: 100%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #3f51b5;
  }
`;
