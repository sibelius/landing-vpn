import React from 'react';
import styled from 'styled-components';
import { Medium } from '../ui/Text';

const Button = styled.button`
  border: 1px solid #F53855;
  background-color: transparent;
  border-radius: 50px;
  width: 150px;
  height: 45px;
  cursor: pointer;
`;

const BorderButton = ({ children }) => {
  return (
    <Button>
      <Medium color='#F53855'>{children}</Medium>
    </Button>
  );
};

export default BorderButton;