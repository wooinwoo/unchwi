import styled from "styled-components";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import TabBar from "./TabBar";
import { BsList } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Title>
          <h2>오늘, 운취</h2>
          <span>오늘, 운동에 취하다. by your side</span>
        </Title>
        <TabContainer>
          <Tab to="/">운취 랭킹</Tab>
          <Tab to="/">우리 동네 실시간 운취</Tab>
          <Tab to="/">진행중인 채팅</Tab>
        </TabContainer>
        <RightArea>
          <SearchIcon />
          <UserIcon />
          <SideBarIcon />
        </RightArea>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
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

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tab = styled(Link)`
  flex: 1;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  color: #070707;
  &:hover {
    color: #a0cbbc;
  }
  &:nth-child(2){
    margin: 0 30px;
  }
  margin-top
`;

const RightArea = styled.div`
  display: flex;
  align-items: center;
`;
const SearchIcon = styled(RiSearchLine)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const UserIcon = styled(FaUserAlt)`
  width: 25px;
  height: 25px;
  margin: 0 50px;
  cursor: pointer;
`;
const SideBarIcon = styled(BsList)`
  right: 20px;
  width: 40px;
  height: 40px;
  color: #80838e;
  cursor: pointer;
`;
