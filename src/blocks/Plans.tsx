import React from 'react';
import { Flex } from 'rebass';
import media from 'styled-media-query';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import { Medium, Regular } from '../ui/Text';
import Free from '../img/Free.png';
import Premium from '../img/Premium.png';
import Standard from '../img/Standard.png';
import JamCheck from '../img/jamCheck.png';
import BorderButton from '../buttons/BorderButton';
import RedBlurButton from '../buttons/RedBlurButton';

const Img = styled.img`
  width: 140px;
  height: 160px;
`;

interface UlProps extends SpaceProps {
  backgroundImageSource: string;
}

const Ul = styled.ul<UlProps>`
  list-style: none;

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
  ${space}
`;

const Li = styled.li`
  margin-top: 15px;
`;

const PlanType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border: 2px solid #dddddd;
  border-radius: 10px;
  padding-top: 80px;
  padding-bottom: 180px;
  max-width: 330px;
  position: relative;
  margin-top: 20px;

  ul {
    padding-left: 45px;
    padding-right: 45px;
  }

  .button-relative,
  .button-relative button {
    width: 100%;
  }

  ${space}
`;

const PlanPriceButtonRelative = styled.div`
  position: absolute;
  bottom: 50px;

  ${media.lessThan('medium')`
    padding: 0 20px;
    width: 100%;
  `}
`;

const PlansContainer = styled(Flex)`
  justify-content: space-between;

  ${media.lessThan('medium')`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `};
`;

const Plans = () => {
  return (
    <Flex mt="80px" flexDirection="column" padding="20px">
      <Flex alignItems="center" flexDirection="column">
        <Medium fontSize="35px">Choose Your Plan</Medium>
        <Regular fontSize="16px" mt="20px" textAlign="center">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </Regular>
      </Flex>
      <PlansContainer mt="60px" flexWrap="wrap">
        <PlanType>
          <Img src={Free} />
          <Medium mt="30px">Free Plan</Medium>
          <Ul backgroundImageSource={JamCheck} mt="30px">
            <Li>
              <Regular fontSize="14px">Unlimited Bandwitch</Regular>
            </Li>
            <Li>
              <Regular fontSize="14px">Encrypted Connection</Regular>
            </Li>
            <Li>
              <Regular fontSize="14px">No Traffic Logs</Regular>
            </Li>
            <Li>
              <Regular fontSize="14px">Works on All Devices</Regular>
            </Li>
          </Ul>
          <PlanPriceButtonRelative>
            <Flex alignItems="center" flexDirection="column">
              <Medium fontSize="25px" mb="20px">
                Free
              </Medium>
              <BorderButton>Select</BorderButton>
            </Flex>
          </PlanPriceButtonRelative>
        </PlanType>

        <PlanType>
          <Img src={Standard} />
          <Medium mt="30px">Standard Plan</Medium>
          <Ul backgroundImageSource={JamCheck} mt="30px">
            <Li>
              <Regular fontSize="14px">Unlimited Bandwitch</Regular>
            </Li>
            <Li>
              <Regular fontSize="14px">Encrypted Connection</Regular>
            </Li>
            <Li>
              <Regular fontSize="14px">Yes Traffic Logs</Regular>
            </Li>
            <Li>
              <Regular fontSize="14px">Works on All Devices</Regular>
            </Li>
            <Li>
              <Regular fontSize="14px">Connect Anyware</Regular>
            </Li>
          </Ul>
          <PlanPriceButtonRelative>
            <Flex alignItems="center" flexDirection="column">
              <Medium fontSize="25px" mb="20px">
                $9<Regular> / mo</Regular>
              </Medium>
              <BorderButton>Select</BorderButton>
            </Flex>
          </PlanPriceButtonRelative>
        </PlanType>

        <PlanType>
          <Img src={Premium} />
          <Medium mt="30px">Premium Plan</Medium>
          <Ul backgroundImageSource={JamCheck} mt="30px">
            <Li>
              <Regular fontSize="14px">Unlimited Bandwitch</Regular>
            </Li>
            <Li>
              <Regular fontSize="14px">Encrypted Connection</Regular>
            </Li>
            <Li>
              <Regular fontSize="14px">Yes Traffic Logs</Regular>
            </Li>
            <Li>
              <Regular fontSize="14px">Works on All Devices</Regular>
            </Li>
            <Li>
              <Regular fontSize="14px">Connect Anyware</Regular>
            </Li>
            <Li>
              <Regular fontSize="14px">Get New Features</Regular>
            </Li>
          </Ul>
          <PlanPriceButtonRelative>
            <Flex alignItems="center" flexDirection="column">
              <Medium fontSize="25px" mb="20px">
                $12<Regular> / mo</Regular>
              </Medium>
              <RedBlurButton>Select</RedBlurButton>
            </Flex>
          </PlanPriceButtonRelative>
        </PlanType>
      </PlansContainer>
    </Flex>
  );
};

export default Plans;
