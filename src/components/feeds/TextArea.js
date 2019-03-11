import React from 'react';
import styled from 'styled-components';

const TextAreaBox = styled.div`
  min-height: 180px;
  overflow: auto;
  &[contenteditable]:empty:before {
    content: attr(data-placeholder);
    color: grey;
    display: inline-block;
  }
  &.isBlank {
    border: 1px solid red;
  }
`;

const ReadOnly = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const TextArea = React.forwardRef((props, ref) => {
  const { readonly, children, ...rest } = props;

  return (
    <>
      <TextAreaBox {...rest} ref={ref} />
      { readonly && <ReadOnly /> }
    </>
  );
})

export default TextArea;