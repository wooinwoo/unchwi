import React from "react";
import styled from "styled-components";
import MovingBall from "./basketball";

const MainBanner = () => {
  console.log(2);
  return (
    <BannerContainer className="banner-container">
      <Title>오늘, 운동에 취하다</Title>
      <SubTitle>
        언제든 함께 즐길 수 있도록 <br />
        by your side.
      </SubTitle>
      <MovingBall />
    </BannerContainer>
  );
};

export default MainBanner;

const BannerContainer = styled.div`
  position: relative;
  height: 400px;
  background-color: #001e6c;
  padding: 145px 0 0 90px;
`;

const Title = styled.h3`
  color: #ffffff;
  text-align: start;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 75px;
  margin-bottom: 20px;
`;
const SubTitle = styled.span`
  color: #c2c2c2;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;
