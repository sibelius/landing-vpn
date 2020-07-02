import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import Navbar from './blocks/Navbar';
import GetStarted from './blocks/GetStarted';
import Stats from './blocks/Stats';
import Features from './blocks/Features';
import Plans from './blocks/Plans';
import Map from './blocks/Map';
import Sponsored from './blocks/Sponsored';
import Footer from './blocks/Footer';
import Subscribe from './blocks/Subscribe';
import Customers from './blocks/Customers';

const Layout = styled(Flex)`
  && {
    margin-bottom: 100px;
    flex-direction: column;
  }
`;

const Center = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  flex-direction: column;
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
      <Center>
        <Navbar />
        <GetStarted />
        <Stats />
        <Features />
      </Center>
      <BackgroundGradient>
        <Center>
          <Plans />
          <Map />
          <Sponsored />
        </Center>
        <Customers />
      </BackgroundGradient>
      <Subscribe />
      <BackgroundFooter>
        <Center>
          <Footer />
        </Center>
      </BackgroundFooter>
    </Layout>
  );
};

export default App;
