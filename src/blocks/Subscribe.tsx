import React from 'react';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';
import { space } from 'styled-system';
import { Medium, Regular } from '../ui/Text';
import RedBlurButton from '../buttons/RedBlurButton';

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

const LayerRelative = styled.div`
  position: relative;
`;

const Subscribe = () => {
  return (
    <LayerRelative>
      <Block mt="100px" alignItems="center">
        <Flex flexDirection="column">
          <Medium fontSize="35px">
            Subscribe Now for
            <br /> Get Special Features!
          </Medium>
          <Regular fontSize="16px" mt="20px">
            Let's subscribe with us and find the fun.
          </Regular>
        </Flex>
        <Flex alignSelf="center">
          <RedBlurButton>Subscribe Now</RedBlurButton>
        </Flex>
      </Block>
    </LayerRelative>
  );
};

export default Subscribe;
