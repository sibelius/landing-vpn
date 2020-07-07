import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { space } from 'styled-system';
import media from 'styled-media-query';

import { Medium, Regular } from '../ui/Text';
import RedBlurButton from '../buttons/RedBlurButton';

export const Block = styled.div`
  background-color: #fff;
  margin-left: 70px;
  margin-right: 70px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;

  ${space}
  ${media.lessThan('medium')`
    flex-direction: column;
    align-items: center;

    .button-relative {
      width: 100%;
      padding: 1rem;
    }

    button {
      margin-top: 35px;
      width: 100%;
    }
  `}
`;

export const TextWrapper = styled(Flex)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  flex-direction: column;
  flex: 2;
`;

const LayerRelative = styled.div`
  position: relative;
`;

const Subscribe = () => {
  return (
    <LayerRelative>
      <Block mt="100px" alignItems="center">
        <TextWrapper flexDirection="column">
          <Medium fontSize="35px">
            Subscribe Now for
            <br /> Get Special Features!
          </Medium>
          <Regular fontSize="16px" mt="20px">
            Let's subscribe with us and find the fun.
          </Regular>
        </TextWrapper>
        <Flex alignSelf="center" width="100%" flex="1">
          <RedBlurButton>Subscribe Now</RedBlurButton>
        </Flex>
      </Block>
    </LayerRelative>
  );
};

export default Subscribe;
