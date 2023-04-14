import React, { useEffect } from "react";
import styled from "styled-components";

function basketball() {
  let speed = 0;
  const gravity = 0.2;
  let exit = false;
  function animate() {
    const ball = document.getElementById("ball");
    // 계속 반복해서 실행되는 함수
    const posY = parseInt(ball.style.top) || 0;
    const nextPosY = posY + speed;
    const containerHeight =
      document.getElementsByClassName("container")[0].offsetHeight;
    const ballHeight = ball.offsetHeight;

    if (nextPosY + ballHeight > containerHeight && !exit) {
      // 공이 땅에 닿은 경우
      speed = -speed * 0.8;

      if (Math.abs(speed) < 2) {
        // 속도가 일정 값 이하로 떨어지면 애니메이션을 중지한다
        return;
      }
    } else {
      // 공이 떨어지는 중인 경우
      speed += gravity;
    }
    ball.style.top = nextPosY + "px";
    if (nextPosY + ballHeight > containerHeight && Math.abs(speed) < 6.5) {
      console.log(speed);
      exit = true;
    }
    if (speed > 30) {
      return;
    }
    requestAnimationFrame(animate);
  }

  useEffect(() => {
    animate();
  }, []);
  return <Ball src="../assets/imges/ basketball.png" />;
}

export default basketball;

const Ball = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #f00;
  border-radius: 50%;
  top: 0;
  left: 75px;
`;
