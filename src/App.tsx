import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { space } from 'styled-system';
import Navbar from './Navbar';
import macImg from './img/mac.png';
import { Bold, Medium, Regular } from './ui/Text';

const Layout = styled(Flex)`
  && {
    margin-left: auto;
    margin-right: auto;
    max-width: 1100px;
    flex-direction: column;       
  }
`;

export const MenuText = styled.a`
  font-weight: 400;
  color: #4F5665;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${space}
`;

export const SignInButton = styled.button`
  width: 150px;
  height: 45px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const SignUpButton = styled.button`
  border: 1px solid #F53855;
  background-color: transparent;
  border-radius: 50px;
  width: 150px;
  height: 45px;
  cursor: pointer;
`;

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

const App = () => {
  return (
    <Layout>
      <Navbar />
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
    </Layout>
  );
}

export default App;