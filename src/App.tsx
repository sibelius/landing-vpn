import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import Navbar from './blocks/Navbar';
import GetStarted from './blocks/GetStarted';
import Stats from './blocks/Stats';
import Features from './blocks/Features';

const Layout = styled(Flex)`
  && {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    max-width: 1100px;
    flex-direction: column;       
  }
`;

const App = () => {
  return (
    <Layout>
      <Navbar />
      <GetStarted />
      <Stats />
      <Features />
    </Layout>
  );
}

export default App;