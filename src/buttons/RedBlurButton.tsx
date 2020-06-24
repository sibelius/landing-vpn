import React from 'react';
import styled from 'styled-components';
import { Bold, Medium } from '../ui/Text';
import { space } from 'styled-system';
import { Flex } from 'rebass';
import { BoxShadow, GetStartedButton } from '../blocks/GetStarted';

const Button = styled.button`
  width: 250px;
  height: 45px;
  background-color: #F53838;
  border: 0;
  cursor: pointer;
  border-radius: 10px;
  ${space}
`;

const ButtonRelative = styled.div`
  position: relative;
`;

const ButtonBlur = styled.div`
  position: absolute;
  width: 211.83px;
  height: 45px;
  background: rgba(245, 56, 56, 0.35);
  filter: blur(54px);
  border-radius: 10px;
  left: 20px;
  top: 55px;
`;

const RedBlurButton = ({ children }) => {
  return (
    <ButtonRelative>
      <Button>
        <Bold color='#ffffff'>{children}</Bold>
      </Button>
      <ButtonBlur />
    </ButtonRelative>
  );
};

export default RedBlurButton;