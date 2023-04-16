import styled from "styled-components";
import SearchBar from "../SearchBar";
import TabBar from "./TabBar";
import { BsList } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Title>
          <h2>오늘, 운취</h2>
          <span>오늘, 운동에 취하다. by your side</span>
        </Title>
        <RightArea>
          <SearchBar />
          <MyPageLink href="">마이페이지</MyPageLink>
          <SideBarIcon />
        </RightArea>
      </HeaderContainer>
      <TabBar />
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  background-color: #ffffff;
  padding: 0 30px;
`;

const Title = styled.div`
  display: flex;
  align-items: end;
  & h2 {
    color: #001e6c;
    font-size: 40px;
    margin: 0;
  }
  & span {
    color: #80838e;
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 5px 5px;
  }
`;

const RightArea = styled.div`
  display: flex;
  align-items: center;
`;
const MyPageLink = styled.a`
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #80838e;
  padding-top: 5px;
  margin-right: 10px;
  margin-left: 30px;
`;
const SideBarIcon = styled(BsList)`
  right: 20px;
  width: 30px;
  height: 30px;
  color: #80838e;
  cursor: pointer;
`;
