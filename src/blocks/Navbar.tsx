import React from 'react';
import { Flex } from 'rebass';
import LogoIcon from '../icons/LogoIcon';
import { Bold, Medium, Regular } from '../ui/Text';
import styled from 'styled-components';
import { space } from 'styled-system';

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

const Navbar = () => {
  return (
    <Flex flex={1} justifyContent='space-between' alignItems='center' mt='50px'>
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
  )
};

export default Navbar;