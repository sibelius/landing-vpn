import React from 'react';
import { Flex } from 'rebass';
import FeatureImg from '../img/feature.png';
import styled from 'styled-components';
import { Medium, Regular } from '../ui/Text';
import CheckCircle from '../img/checkCircle.png';
import { space, SpaceProps } from 'styled-system';
import media from 'styled-media-query';

const Img = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  margin-right: 160px;

  ${media.lessThan('medium')`
    width: 100%;
    max-width: 100%;
  `}
`;

interface UlProps extends SpaceProps {
  backgroundImageSource: string;
}

const Ul = styled.ul<UlProps>`
  list-style: none;
  padding-inline-start: 40px;

  li::before {
    content: '';
    background-image: url(${(props) => props.backgroundImageSource});
    background-size: contain;
    display: inline-block;
    width: 1em;
    height: 1em;
    position: relative;
    top: 0.1rem;
    margin-right: 0.2rem;
  }

  ${media.lessThan('medium')`
    padding-inline-start: 0;
  `}

  ${space}
`;

const Li = styled.li`
  margin-top: 15px;
`;

const Container = styled(Flex)`
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

export const Content = styled(Flex)`
  margin-left: 160px;

  ${media.lessThan('medium')`
    padding: 40px 40px 0;
    margin-left: unset;
  `}
`;

const Features = () => {
  return (
    <Container mt="100px">
      <Img src={FeatureImg} />
      <Content flexDirection="column" padding={[40, 40, 0]}>
        <Medium fontSize="35px" color="#0B132A">
          We Provide Many Features You Can Use
        </Medium>
        <Regular fontSize="16px" mt="20px" color="#4F5665">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </Regular>
        <Ul backgroundImageSource={CheckCircle} mt="20px">
          <Li>
            <Regular fontSize="14px">Powerfull online protection.</Regular>
          </Li>
          <Li>
            <Regular fontSize="14px">Internet without borders.</Regular>
          </Li>
          <Li>
            <Regular fontSize="14px">Supercharged VPN</Regular>
          </Li>
          <Li>
            <Regular fontSize="14px">No specific time limits.</Regular>
          </Li>
        </Ul>
      </Content>
    </Container>
  );
};

export default Features;
