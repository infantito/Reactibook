import React from 'react';
import styled from 'styled-components';

const ErrorBox = styled.div`
  color: #f5222d;
`;

const ErrorMessage = ({ error }) =>
  error
  ? <ErrorBox><span>{error}</span></ErrorBox>
  : null;

export default ErrorMessage;