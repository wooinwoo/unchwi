import React, { useEffect } from "react";
import styled from "styled-components";

const MainBanner = () => {
  useEffect(() => {
    document.getElementById("gif").src =
      "src/assets/gif/basketball.gif?a=" + Math.random();
  }, []);
  return (
    <BannerContainer className="banner-container">
      <TitleBox>
        <Title>
          오늘, 운동에 취하다
          <br />
          <span>
            언제든 함께 즐길 수 있도록 <br />
            by your side.
          </span>
        </Title>
      </TitleBox>
      <BallBox>
        <Ball id="gif" src="src/assets/gif/basketball.gif" />
      </BallBox>
    </BannerContainer>
  );
};

export default MainBanner;

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 400px;
  background-color: #001e6c;
`;

const TitleBox = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  position: relative;
  display: flex;
  color: #ffffff;
  text-align: start;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 75px;
  margin-bottom: 20px;
  margin-left: 200px;
  @media only screen and (max-width: 1200px) {
    font-size: 48px;
  }
  @media only screen and (max-width: 992px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }

  & span {
    position: absolute;
    top: 74px;
    left: 0;
    color: #c2c2c2;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
`;
const SubTitle = styled.span`
  position: absolute;
  top: 0;
  color: #c2c2c2;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;

const BallBox = styled.div`
  flex: 1;
  position: relative;
`;
const Ball = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
