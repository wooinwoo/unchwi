import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

type BallProps = {
  position: number;
  isMoving: boolean;
};

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const Ball = styled.img<BallProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 100px);
  right: ${({ position }) => position}px;
  animation: ${rotate} 2s linear infinite;
  animation-play-state: ${({ isMoving }) => (isMoving ? "running" : "paused")};
`;

const MovingBall = () => {
  const [position, setPosition] = useState<number>(0);
  const [isMoving, setIsMoving] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (
        position >=
        document.getElementsByClassName("banner-container")[0].clientWidth / 2 -
          200
      ) {
        clearInterval(intervalId);
        console.log(123);
        setIsMoving(!isMoving);
      } else {
        setPosition(position + 5);
      }
    }, 30);

    return () => clearInterval(intervalId);
  }, [position]);

  return (
    <Ball
      position={position}
      isMoving={isMoving}
      src="src/assets/imges/basketball.png"
    />
  );
};

export default MovingBall;
