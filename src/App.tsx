import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { space } from 'styled-system';
import Navbar from './blocks/Navbar';
import GetStarted from './blocks/GetStarted';
import Stats from './blocks/Stats';

const Layout = styled(Flex)`
  && {
    margin-left: auto;
    margin-right: auto;
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
    </Layout>
  );
}

export default App;