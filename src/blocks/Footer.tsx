import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import LogoIcon from '../icons/LogoIcon';
import { Bold, Medium, Regular } from '../ui/Text';
import FacebookIcon from '../icons/FacebookIcon';
import TwitterIcon from '../icons/TwitterIcon';
import InstagramIcon from '../icons/InstagramIcon';
import { space } from 'styled-system';

const FooterLink = styled.a`
  font-weight: 400;
  color: #4f5665;
  cursor: pointer;
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
    <Flex flex={1} mt="60px" justifyContent="space-between">
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
      <Flex>
        <Flex flexDirection="column">
          <Medium fontSize="18px">Product</Medium>
          <FooterLink fontSize="16px" mt="20px">
            Download
          </FooterLink>
          <FooterLink fontSize="16px" mt="10px">
            Pricing
          </FooterLink>
          <FooterLink fontSize="16px" mt="10px">
            Locations
          </FooterLink>
          <FooterLink fontSize="16px" mt="10px">
            Server
          </FooterLink>
          <FooterLink fontSize="16px" mt="10px">
            Countries
          </FooterLink>
          <FooterLink fontSize="16px" mt="10px">
            Blog
          </FooterLink>
        </Flex>
        <Flex flexDirection="column" ml="120px">
          <Medium fontSize="18px">Engage</Medium>
          <FooterLink fontSize="16px" mt="20px">
            LaslesVPN ?
          </FooterLink>
          <FooterLink fontSize="16px" mt="10px">
            FAQ
          </FooterLink>
          <FooterLink fontSize="16px" mt="10px">
            Tutorials
          </FooterLink>
          <FooterLink fontSize="16px" mt="10px">
            About Us
          </FooterLink>
          <FooterLink fontSize="16px" mt="10px">
            Privacy Policy
          </FooterLink>
          <FooterLink fontSize="16px" mt="10px">
            Terms of Service
          </FooterLink>
        </Flex>
        <Flex flexDirection="column" ml="120px">
          <Medium fontSize="18px">Earn Money</Medium>
          <FooterLink fontSize="16px" mt="20px">
            Affiliate
          </FooterLink>
          <FooterLink fontSize="16px" mt="10px">
            Become Partner
          </FooterLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
