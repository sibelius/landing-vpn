import React from 'react';
import { Text, Flex } from 'rebass';
import styled from 'styled-components';
import { background, borders, color, space } from 'styled-system';
import LogoIcon from './icons/LogoIcon';

const Layout = styled(Flex)`
  && {
    margin-top: 50px;      
    margin-left: auto;
    margin-right: auto;
    max-width: 1100px;       
  }
`;

const NavBar = styled(Flex)`
  && {
    justify-content: space-between;
    align-items: center;
  }
`

const Regular = styled(Text).attrs({
  as: 'span'
})`
  font-weight: 400;
  ${space}
  ${color}
`;

const Medium = styled(Text).attrs({
  as: 'span'
})`
  font-weight: 500;
  ${space}
  ${color}
`;

const Bold = styled(Text).attrs({
  as: 'span'
})`
  font-weight: bold;
  ${space}
  ${color}
`;

const MenuText = styled.a`
  font-weight: 400;
  color: #4F5665;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${space}
`;

const SignInButton = styled.button`
  width: 150px;
  height: 45px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const SignUpButton = styled.button`
  border: 1px solid #F53855;
  background-color: transparent;
  border-radius: 50px;
  width: 150px;
  height: 45px;
  cursor: pointer;
`;

const App = () => {
  return (
    <Layout>
      <Flex flex={1} justifyContent='space-between' alignItems='center'>
        <Flex flexDirection='row' alignItems='center'>
          <LogoIcon mr='10px'/>
          <Regular>Lasles<Bold>VPN</Bold></Regular>
        </Flex>
        <Flex>
          <MenuText>About</MenuText>
          <MenuText ml='40px'>Features</MenuText>
          <MenuText ml='40px'>Pricing</MenuText>
          <MenuText ml='40px'>Testimonials</MenuText>
          <MenuText ml='40px'>Help</MenuText>
        </Flex>
        <Flex>
          <SignInButton>
            <Medium>Sign In</Medium>
          </SignInButton>
          <SignUpButton>
            <Medium color='#F53855'>Sign Up</Medium>
          </SignUpButton>
        </Flex>
      </Flex>
    </Layout>
  );
}

export default App;