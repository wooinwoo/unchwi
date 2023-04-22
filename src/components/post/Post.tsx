import React from "react";
import styled from "styled-components";
import { BsStar, BsChat } from "react-icons/bs";

const Post = () => {
  console.log(2);
  return (
    <Container>
      <PostHeader>
        <div className="left-area">
          <ProfilePicture />
          <div className="info-area">
            <UserName>wooinwoo</UserName>
            <div>
              <Info>1분전</Info>
              <Info>
                종목 : <span>농구</span>
              </Info>
              <Info>
                수준 : <span>아오미네 급</span>
              </Info>
            </div>
          </div>
        </div>
      </PostHeader>
      <PostBody>
        농구 할 사람?? 얼레벌레 체육관에서 할 거고 지금 6명 있어요. <br />
        <br />
        시간 및 다른 질문사항은 제발 메세지로 물어봐주세요 🙏
        <br />
        시간 및 다른 질문사항은 제발 메세지로 물어봐주세요 🙏
        <br />
        시간 및 다른 질문사항은 제발 메세지로 물어봐주세요 🙏
      </PostBody>
      <PostFooter>
        <div>
          <ButtonArea>
            <span className="count">1</span>
            <button>
              <BsStar />
            </button>
            <span>관심</span>
          </ButtonArea>
          <ButtonArea>
            <button>
              <BsChat />
            </button>
            <span>채팅</span>
          </ButtonArea>
        </div>
      </PostFooter>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  height: calc(75% + 60px);
  background: #f4f4f4;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  padding: 20px 50px;
  margin: 10px;
`;

const PostHeader = styled.div`
  display: flex;

  height: 60px;
  & .left-area {
    display: flex;

    .info-area {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-around;
    }
  }
`;
const ProfilePicture = styled.img`
  width: 60px;
  height: 60px;
  background-color: gray;
  border-radius: 50%;
  margin-right: 20px;
`;
const UserName = styled.p`
  color: #000000;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
`;
const Info = styled.span`
  color: #80838e;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  margin-right: 20px;
  & span {
    font-size: 12px;
    color: #80838e;
  }
`;

const PostBody = styled.pre`
  display: flex;
  align-items: center;
  height: 55%;
  padding: 40px;
  color: #717481;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
`;
const PostFooter = styled.div`
  display: flex;
  justify-content: end;
  height: 20%;
  & div {
    display: flex;
    align-items: center;
  }
`;
const ButtonArea = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  flex-direction: column;
  margin: 0 15px;

  & .count {
    position: absolute;
    top: -15px;
  }
  & span {
    color: #80838e;
    font-weight: 600;
    font-size: 16px;
    line-height: 12px;
    background-color: initial;
  }
  & button {
    cursor: pointer;
    padding: 0;
    border: 0;
    margin-bottom: 6px;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
