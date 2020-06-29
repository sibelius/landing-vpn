import React from 'react';
import { Flex, Text } from 'rebass';
import { layout } from 'styled-system';
import styled from 'styled-components';
import Amazon from '../img/amazon.png';
import Discord from '../img/discord.png';
import Netflix from '../img/netflix.png';
import Reddit from '../img/reddit.png';
import Spotify from '../img/spotify.png';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  margin-top: 100px;
  align-items: center;
`;

const Img = styled.img`
  ${layout}
`;

const Sponsored = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Img src={Netflix} width="200px" height="112px" />
      <Img src={Reddit} width="150px" height="50px" />
      <Img src={Amazon} width="277px" height="208px" />
      <Img src={Discord} width="187px" height="63px" />
      <Img src={Spotify} width="171px" height="51px" />
    </Flex>
  );
};

export default Sponsored;
