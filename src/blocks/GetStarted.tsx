import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { space } from 'styled-system';
import media from 'styled-media-query';

import { Bold, Medium, Regular } from '../ui/Text';
import macImg from '../img/mac.png';

const Img = styled.img`
  width: 50%;
  height: 380px;

  ${media.lessThan('medium')`
    width: 100%;
    height: 100%;
    margin-top: 40px;
  `}
`;

export const GetStartedButton = styled.button`
  width: 250px;
  height: 60px;
  background-color: #f53838;
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
`;

export const Section = styled(Flex)`
  padding: 20px;

  ${media.lessThan('medium')`
    padding: 40px;
    flex-direction: column;
    margin: 0;
  `}
`;

const GetStarted = () => {
  return (
    <Section mt="48px" justifyContent="space-between">
      <Flex flexDirection="column">
        <Medium fontSize="48px" color="#0B132A" lineHeight="70px">
          Want anything to be easy with <Bold>LaslesVPN.</Bold>
        </Medium>
        <Regular mt="20px">
          Provide a network for all your needs with ease and fun using{' '}
          <Bold>LaslesVPN</Bold> discover interesting features from us.
        </Regular>
        <GetStartedButton mt="50px">
          <Bold color="#ffffff">Get Started</Bold>
        </GetStartedButton>
        <BoxShadow />
      </Flex>
      <Img src={macImg} />
    </Section>
  );
};

export default GetStarted;
