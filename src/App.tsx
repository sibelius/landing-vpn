import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import Navbar from './blocks/Navbar';
import GetStarted from './blocks/GetStarted';
import Stats from './blocks/Stats';
import Features from './blocks/Features';
import Plans from './blocks/Plans';
import Map from './blocks/Map';

const Layout = styled(Flex)`
  && {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    max-width: 1100px;
    flex-direction: column;
  }
`;

const BackgroundGradient = styled.div`
  background: linear-gradient(
    180deg,
    #f8f8f8 -45.04%,
    rgba(248, 248, 248, 0) 88.56%
  );
`;

const BackgroundFooter = styled.div`
  background-color: #f8f8f8;
`;

const App = () => {
  return (
    <Layout>
      <Navbar />
      <GetStarted />
      <Stats />
      <Features />
      <BackgroundGradient>
        <Plans />
        <Map />
      </BackgroundGradient>
      <BackgroundFooter />
    </Layout>
  );
};

export default App;
