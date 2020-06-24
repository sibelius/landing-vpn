import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { space } from 'styled-system';
import UserIcon from '../icons/UserIcon';
import { Bold, Regular } from '../ui/Text';
import LocationIcon from '../icons/LocationIcon';
import ServerIcon from '../icons/ServerIcon';

export const Block = styled.div`
  background-color: #fff;
  margin-left: 70px;
  margin-right: 70px;
  padding-top: 35px;
  padding-bottom: 35px;
  padding-left: 90px;
  padding-right: 90px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  ${space}
`;

export const CircleIcon = styled.div`
  background-color: #FFECEC;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.div`  
  border-left: 2px solid #EEEFF2;
  width: 0px;
`;

const LayerRelative = styled.div`
  position: relative;
`;

// TODO - fix this
const LayerBlur = styled.div`
  background: #0D1025;
  opacity: 0.06;
  filter: blur(114px);
  border-radius: 10px;
  width: 1068.84px;
  height: 189.22px;
  position: absolute; 
`;


const Stats = () => {
  return (
    <LayerRelative>
      <Block mt='100px'>
        <Flex alignItems='center' pb='30px' pt='30px'>
          <CircleIcon>
            <UserIcon />
          </CircleIcon>
          <Flex flexDirection='column' ml='30px'>
            <Bold>90+</Bold>
            <Regular>Users</Regular>
          </Flex>
        </Flex>
        <Divider />
        <Flex alignItems='center' pb='30px' pt='30px'>
          <CircleIcon>
            <LocationIcon />
          </CircleIcon>
          <Flex flexDirection='column' ml='30px'>
            <Bold>30+</Bold>
            <Regular>Locations</Regular>
          </Flex>
        </Flex>
        <Divider />
        <Flex alignItems='center' pb='30px' pt='30px'>
          <CircleIcon>
            <ServerIcon />
          </CircleIcon>
          <Flex flexDirection='column' ml='30px'>
            <Bold>50+</Bold>
            <Regular>Servers</Regular>
          </Flex>
        </Flex>
      </Block>
      <LayerBlur />
    </LayerRelative>
  );
}

export default Stats;