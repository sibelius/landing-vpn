import React from 'react';
import { Flex } from 'rebass';
import { layout } from 'styled-system';
import styled from 'styled-components';
import Amazon from '../img/amazon.png';
import Discord from '../img/discord.png';
import Netflix from '../img/netflix.png';
import Reddit from '../img/reddit.png';
import Spotify from '../img/spotify.png';
import media from 'styled-media-query';

const Img = styled.img`
  ${layout}
`;

export const Container = styled(Flex)`
  max-width: 100%;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;

  ${media.lessThan('medium')`
    flex-direction: column;

    img {
      margin: 20px 0;
    }
  `};
`;

const Sponsored = () => {
  return (
    <Container alignItems="center">
      <Img src={Netflix} width="200px" height="112px" />
      <Img src={Reddit} width="150px" height="50px" />
      <Img src={Amazon} width="277px" height="208px" />
      <Img src={Discord} width="187px" height="63px" />
      <Img src={Spotify} width="171px" height="51px" />
    </Container>
  );
};

export default Sponsored;
