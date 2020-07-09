import React from 'react';
import { Flex } from 'rebass';
import { Box } from 'reflexbox';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import LogoIcon from '../icons/LogoIcon';
import { Bold, Medium, Regular } from '../ui/Text';
import FacebookIcon from '../icons/FacebookIcon';
import TwitterIcon from '../icons/TwitterIcon';
import InstagramIcon from '../icons/InstagramIcon';

const FooterLink = styled.a<SpaceProps>`
  font-weight: 400;
  color: #4f5665;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }

  ${space}
`;

const IconLink = styled.a`
  cursor: pointer;
  ${space}
`;

const Footer = () => {
  return (
    <Flex
      flex={1}
      mt="60px"
      padding="40px"
      justifyContent="space-between"
      flexDirection={['column', 'row']}
    >
      <Flex flexDirection="column">
        <Flex flexDirection="row" alignItems="center">
          <LogoIcon mr="10px" />
          <Regular>
            Lasles<Bold>VPN</Bold>
          </Regular>
        </Flex>
        <Regular mt="20px">
          <Medium>LaslesVPN</Medium> is a private virtual network that
          <br /> has unique features and has high security.
        </Regular>
        <Flex mt="30px">
          <IconLink>
            <FacebookIcon fill="#F53838" />
          </IconLink>
          <IconLink>
            <TwitterIcon fill="#F53838" ml="20px" />
          </IconLink>
          <IconLink>
            <InstagramIcon fill="#F53838" ml="20px" />
          </IconLink>
        </Flex>
        <Regular mt="30px" color="#AFB5C0" fontSize="16px">
          ©2020Lasles<Medium>VPN</Medium>
        </Regular>
      </Flex>
      <Flex mt={['40px', 0]}>
        <Box width={[1, 1 / 3]}>
          <Flex flexDirection="column">
            <Medium fontSize="18px">Product</Medium>
            <FooterLink mt="20px">Download</FooterLink>
            <FooterLink mt="10px">Pricing</FooterLink>
            <FooterLink mt="10px">Locations</FooterLink>
            <FooterLink mt="10px">Server</FooterLink>
            <FooterLink mt="10px">Countries</FooterLink>
            <FooterLink mt="10px">Blog</FooterLink>
          </Flex>
        </Box>
        <Box width={[1, 1 / 3]} mx={[40, 20, 80]}>
          <Flex flexDirection="column">
            <Medium fontSize="18px">Engage</Medium>
            <FooterLink mt="20px">LaslesVPN ?</FooterLink>
            <FooterLink mt="10px">FAQ</FooterLink>
            <FooterLink mt="10px">Tutorials</FooterLink>
            <FooterLink mt="10px">About Us</FooterLink>
            <FooterLink mt="10px">Privacy Policy</FooterLink>
            <FooterLink mt="10px">Terms of Service</FooterLink>
          </Flex>
        </Box>
        <Box width={[1, 1 / 3]}>
          <Flex flexDirection="column">
            <Medium fontSize="18px">Earn Money</Medium>
            <FooterLink mt="20px">Affiliate</FooterLink>
            <FooterLink mt="10px">Become Partner</FooterLink>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Footer;
