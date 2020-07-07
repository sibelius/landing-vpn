import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { Medium, Regular } from '../ui/Text';
import Viezh from '../img/viezh.png';
import Yessica from '../img/yessica.png';
import Kim from '../img/kim.png';
import StarIcon from '../icons/StarIcon';
import { space } from 'styled-system';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

const Card = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 400px;
  height: 230px;
  border: 2px solid #dddddd;
  border-radius: 10px;
  padding: 30px;
  flex-direction: column;
  &:hover {
    border: 2px solid #f53838;
  }
  ${space}
`;

const Picture = styled.img`
  width: 50px;
  height: 50px;
`;

const CardScroll = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  margin-left: 50px;
  margin-top: 60px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  -webkit-overflow-scrolling: touch;
`;

const ScrollItem = styled.div`
  background-color: #f53838;
  width: 45px;
  height: 15px;
  border-radius: 20px;
  ${space}
`;

const Circle = styled.div`
  background-color: #dde0e4;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  ${space}
`;

const CircleBorderRed = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 2px solid #f53838;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  ${space}
`;

const CircleAllRed = styled.button`
  background-color: #f53838;
  border: 2px solid #f53838;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${space}
`;

const Customers = () => {
  return (
    <Flex mt="50px" flexDirection="column">
      <Flex flexDirection="column" alignItems="center">
        <Medium fontSize="35px" textAlign="center">
          Trusted by Thousands of
          <br /> Happy Customer
        </Medium>
        <Regular fontSize="16px" textAlign="center" mt="20px">
          These are the stories of our customers who have joined us with great
          <br /> pleasure when using this crazy feature.
        </Regular>
      </Flex>
      <CardScroll>
        <Card ml="30px">
          <Flex justifyContent="space-between">
            <Flex>
              <Picture src={Viezh} />
              <Flex flexDirection="column" ml="20px">
                <Medium fontSize="18px">Viezh Robert</Medium>
                <Regular>Warsaw, Poland</Regular>
              </Flex>
            </Flex>
            <Flex>
              <Regular>4.5</Regular>
              <StarIcon />
            </Flex>
          </Flex>
          <Regular fontSize="16px" mt="20px">
            “Wow... I am very happy to use this VPN, it turned out to be more
            than my expectations and so far there have been no problems.
            LaslesVPN always the best”.
          </Regular>
        </Card>
        <Card ml="30px">
          <Flex justifyContent="space-between">
            <Flex>
              <Picture src={Yessica} />
              <Flex flexDirection="column" ml="20px">
                <Medium fontSize="18px">Yessica Christy</Medium>
                <Regular>Shanxi, China</Regular>
              </Flex>
            </Flex>
            <Flex>
              <Regular>4.5</Regular>
              <StarIcon />
            </Flex>
          </Flex>
          <Regular fontSize="16px" mt="20px">
            “I like it because I like to travel far and still can connect with
            high speed.”.
          </Regular>
        </Card>
        <Card ml="30px">
          <Flex justifyContent="space-between">
            <Flex>
              <Picture src={Kim} />
              <Flex flexDirection="column" ml="20px">
                <Medium fontSize="18px">Kim Young Jou</Medium>
                <Regular>Seoul, South Korea</Regular>
              </Flex>
            </Flex>
            <Flex>
              <Regular>4.5</Regular>
              <StarIcon />
            </Flex>
          </Flex>
          <Regular fontSize="16px" mt="20px">
            “This is very unusual for my business that currently requires a
            virtual private network that has high security.”.
          </Regular>
        </Card>
      </CardScroll>
      <Flex
        flex={1}
        mt="80px"
        justifyContent="space-between"
        ml="50px"
        mr="50px"
      >
        <Flex>
          <ScrollItem />
          <Circle ml="15px" />
          <Circle ml="15px" />
          <Circle ml="15px" />
        </Flex>
        <Flex>
          <CircleBorderRed>
            <ArrowLeftIcon />
          </CircleBorderRed>
          <CircleAllRed ml="20px">
            <ArrowRightIcon />
          </CircleAllRed>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Customers;
