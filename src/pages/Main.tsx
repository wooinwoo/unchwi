import React from "react";
import styled from "styled-components";
import MainBanner from "../components/MainBanner";
import PostContainer from "../components/post/PostContainer";

const main = () => {
  return (
    <Wrap>
      <MainBanner />
      <Content>
        <PostContainer />
      </Content>
    </Wrap>
  );
};

export default main;

const Wrap = styled.div``;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
