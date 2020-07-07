import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { Medium, Regular } from '../ui/Text';
import GlobalMap from '../img/map.png';

const Img = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 150px;
`;

const Map = () => {
  return (
    <Flex flex={1} mt="150px" flexDirection="column">
      <Flex
        flex={1}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Medium fontSize="35px" textAlign="center">
          Huge Global Network
          <br /> of Fast VPN
        </Medium>
        <Regular mt="20px" fontSize="16px" textAlign="center">
          See <Medium>LaslesVPN</Medium> everywhere to make it easier for you
          when you move
          <br /> locations.
        </Regular>
      </Flex>
      <Img src={GlobalMap} />
    </Flex>
  );
};

export default Map;
