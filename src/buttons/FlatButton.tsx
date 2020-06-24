import React from 'react';
import styled from 'styled-components';
import { Medium } from '../ui/Text';

const TransparentButton = styled.button`
  width: 150px;
  height: 45px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const FlatButton = ({ children }) => {
  return (
    <TransparentButton>
      <Medium>{children}</Medium>
    </TransparentButton>
  );
};

export default FlatButton;