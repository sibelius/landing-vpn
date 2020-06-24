import React from 'react';
import { Flex } from 'rebass';
import FeatureImg from '../img/feature.png';
import styled from 'styled-components';
import { Medium, Regular } from '../ui/Text';
import CheckCircle from '../img/checkCircle.png';
import { space } from 'styled-system';

const Img = styled.img`
  max-width: 500px;
  height: auto; 
`;

const Ul = styled.ul`
  list-style: none;
  
  li::before {
    content: "";    
    background-image: url(${props => props.src});
    background-size: contain;
    display: inline-block;
    width: 1em;
    height: 1em;
    position: relative;
    top: 0.1rem;
    margin-right: 0.2rem;
  }
  ${space}
`;

const Li = styled.li`
  margin-top: 15px;
`

const Features = () => {
  return (
    <Flex mt='100px'>
      <Img src={FeatureImg} />
      <Flex flexDirection='column' ml='160px'>
        <Medium fontSize='35px' color='#0B132A'>
          We Provide Many Features You Can Use
        </Medium>
        <Regular fontSize='16px' mt='20px' color='#4F5665'>
          You can explore the features that we provide with fun and have their own functions each feature.
        </Regular>
        <Ul src={CheckCircle} mt='20px'>
          <Li>
            <Regular fontSize='14px'>
              Powerfull online protection.
            </Regular>
          </Li>
          <Li>
            <Regular fontSize='14px'>
              Internet without borders.
            </Regular>
          </Li>
          <Li>
            <Regular fontSize='14px'>
              Supercharged VPN
            </Regular>
          </Li>
          <Li>
            <Regular fontSize='14px'>
              No specific time limits.
            </Regular>
          </Li>
        </Ul>
      </Flex>
    </Flex>
  )
};

export default Features;