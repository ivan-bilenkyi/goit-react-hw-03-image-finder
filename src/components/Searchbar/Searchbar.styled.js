import { Form as FormikForm, Field as FormikField } from 'formik';
import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  min-height: 64px;
  margin-bottom: 32px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled(FormikForm)`
  width: 320px;
  position: relative;
  margin: 0 auto;
`;

export const Field = styled(FormikField)`
  width: 100%;
  height: 40px;
  padding-left: 48px;
  padding-right: 8px;
  outline: none;
  border: none;
`;

export const Button = styled.button`
  position: absolute;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 0;
  cursor: pointer;
  outline: none;
`;
