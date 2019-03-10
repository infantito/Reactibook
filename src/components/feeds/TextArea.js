// import React from 'react';
import styled from 'styled-components';

const TextArea = styled.div`
  min-height: 180px;
  overflow: auto;
  &[contenteditable]:empty:before {
    content: attr(data-placeholder);
    color: grey;
    display: inline-block;
  }
`;

export default TextArea;