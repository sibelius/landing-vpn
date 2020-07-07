import React from 'react';
import { Flex } from 'rebass';
import { Medium, Regular } from '../ui/Text';
import Free from '../img/Free.png';
import Premium from '../img/Premium.png';
import Standard from '../img/Standard.png';
import styled from 'styled-components';
import { space } from 'styled-system';
import JamCheck from '../img/jamCheck.png';
import BorderButton from '../buttons/BorderButton';
import RedBlurButton from '../buttons/RedBlurButton';

const Img = styled.img`
  width: 140px;
  height: 160px;
`;

const Ul = styled.ul`
  list-style: none;

  li::before {
    content: '';
    background-image: url(${(props) => props.src});
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
  padding-left: 45px;
  padding-right: 45px;
  max-width: 330px;
  position: relative;
  ${space}
`;

const PlanPriceButtonRelative = styled.div`
  position: absolute;
  bottom: 50px;
`;

const Plans = () => {
  return (
    <Flex mt="80px" flexDirection="column">
      <Flex alignItems="center" flexDirection="column">
        <Medium fontSize="35px">Choose Your Plan</Medium>
        <Regular fontSize="16px" mt="20px">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </Regular>
      </Flex>
      <Flex mt="60px" justifyContent="space-between" flexWrap="wrap">
        <PlanType>
          <Img src={Free} />
          <Medium mt="30px">Free Plan</Medium>
          <Ul src={JamCheck} mt="30px">
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
          <Ul src={JamCheck} mt="30px">
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
          <Ul src={JamCheck} mt="30px">
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
      </Flex>
    </Flex>
  );
};

export default Plans;
