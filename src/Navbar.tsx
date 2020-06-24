import React from 'react';
import { Flex } from 'rebass';
import LogoIcon from './icons/LogoIcon';
import { Bold, Medium, MenuText, Regular, SignInButton, SignUpButton } from './App';

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