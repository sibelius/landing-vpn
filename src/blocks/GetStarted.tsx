import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { space } from 'styled-system';
import macImg from '../img/mac.png';
import { Bold, Medium, Regular } from '../ui/Text';

const Img = styled.img`
  width: 600px;
  height: 380px;
`;

export const GetStartedButton = styled.button`
  width: 250px;
  height: 60px;
  background-color: #F53838;
  border: 0;
  cursor: pointer;
  border-radius: 10px;
  ${space}
`;

export const BoxShadow = styled.div`
  position: relative;
  width: 211.83px;
  height: 60px;
  background: rgba(245, 56, 56, 0.35);
  filter: blur(54px);
  border-radius: 10px;
  top: -30px;
  left: 20px;
`

const GetStarted = () => {
  return (
    <Flex mt='80px' justifyContent='space-between'>
      <Flex flexDirection='column'>
        <Medium
          fontSize='48px'
          color='#0B132A'
          lineHeight='70px'
        >Want anything to be easy with <Bold>LaslesVPN.</Bold></Medium>
        <Regular mt='20px'>
          Provide a network for all your needs with ease and fun using <Bold>LaslesVPN</Bold> discover interesting features from us.
        </Regular>
        <GetStartedButton mt='50px'>
          <Bold color='#ffffff'>Get Started</Bold>
        </GetStartedButton>
        <BoxShadow />
      </Flex>
      <Img src={macImg} />
    </Flex>
  );
}

export default GetStarted;