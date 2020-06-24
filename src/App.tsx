import React from 'react';
import { Text, Flex } from 'rebass';
import styled from 'styled-components';
import { background, borders, color, space } from 'styled-system';
import LogoIcon from './icons/LogoIcon';
import Navbar from './Navbar';

const Layout = styled(Flex)`
  && {
    margin-left: auto;
    margin-right: auto;
    max-width: 1100px;
    flex-direction: column;       
  }
`;

export const Regular = styled(Text).attrs({
  as: 'span'
})`
  font-weight: 400;
  ${space}
  ${color}
`;

export const Medium = styled(Text).attrs({
  as: 'span'
})`
  font-weight: 500;
  ${space}
  ${color}
`;

export const Bold = styled(Text).attrs({
  as: 'span'
})`
  font-weight: bold;
  ${space}
  ${color}
`;

export const MenuText = styled.a`
  font-weight: 400;
  color: #4F5665;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${space}
`;

export const SignInButton = styled.button`
  width: 150px;
  height: 45px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const SignUpButton = styled.button`
  border: 1px solid #F53855;
  background-color: transparent;
  border-radius: 50px;
  width: 150px;
  height: 45px;
  cursor: pointer;
`;

const App = () => {
  return (
    <Layout>
      <Navbar />
    </Layout>
  );
}

export default App;