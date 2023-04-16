import React from "react";
import styled from "styled-components";
import MainBanner from "../components/MainBanner";
import PostContainer from "../components/post/PostContainer";

function main() {
  return (
    <Wrap>
      <MainBanner />
      <PostContainer />
    </Wrap>
  );
}

export default main;

const Wrap = styled.div``;
