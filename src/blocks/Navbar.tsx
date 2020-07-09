import React, { useState } from 'react';
import { Flex } from 'rebass';
import { space, SpaceProps } from 'styled-system';
import { Drawer } from '@material-ui/core';
import { useWindowSize } from 'use-window-size-hook';

import { Bold, Medium, Regular } from '../ui/Text';
import styled from 'styled-components';
import media from 'styled-media-query';

import MenuButton from '../buttons/MenuButton';
import LogoIcon from '../icons/LogoIcon';

const MenuText = styled.a<SpaceProps>`
  font-weight: 400;
  color: #4f5665;
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
  border: 1px solid #f53855;
  background-color: transparent;
  border-radius: 50px;
  width: 150px;
  height: 45px;
  cursor: pointer;
`;

export const DrawerContent = styled(Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px;
  width: 300px;
  height: 100%;

  ${media.lessThan('medium')`
    width: 60vw;
  `}

  div {
    flex-direction: column;
    align-items: center;

    & + div {
      margin-top: 40px;
    }
  }

  a {
    margin: 0;
    font-size: 24px;
  }

  button {
    font-size: 16px;
  }
`;

export const NavbarContainer = styled(Flex)`
  padding: 20px;
  margin-top: 50px;

  ${media.lessThan('medium')`
    padding: 40px;
    margin-top: 0;
  `}
`;

const NavbarContent = () => (
  <>
    <Flex>
      <MenuText>About</MenuText>
      <MenuText ml="40px">Features</MenuText>
      <MenuText ml="40px">Pricing</MenuText>
      <MenuText ml="40px">Testimonials</MenuText>
      <MenuText ml="40px">Help</MenuText>
    </Flex>
    <Flex>
      <SignInButton>
        <Medium>Sign In</Medium>
      </SignInButton>
      <SignUpButton>
        <Medium color="#F53855">Sign Up</Medium>
      </SignUpButton>
    </Flex>
  </>
);

const Navbar = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const { screenLayout } = useWindowSize();

  const toggleDrawer = () => {
    setIsDrawerOpened((prev) => !prev);
  };

  return (
    <NavbarContainer
      flex={1}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" alignItems="center">
        <LogoIcon mr="10px" />
        <Regular>
          Lasles<Bold>VPN</Bold>
        </Regular>
      </Flex>

      {screenLayout.isMdOrBelow ? (
        <>
          <MenuButton onClick={toggleDrawer} />
          <Drawer anchor="right" open={isDrawerOpened} onClose={toggleDrawer}>
            <DrawerContent>
              <NavbarContent />
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <NavbarContent />
      )}
    </NavbarContainer>
  );
};

export default Navbar;
