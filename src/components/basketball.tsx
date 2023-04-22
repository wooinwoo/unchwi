import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
const MovingBall = () => {

  return <Ball id="gif" src="src/assets/gif/basketball.gif" />;
};

export default MovingBall;

const Ball = styled.img`
  position: absolute;
  top: calc(25%);
  right: 0;
  width: 50%;
  object-fit: cover;
`;
