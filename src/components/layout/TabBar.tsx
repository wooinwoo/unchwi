import styled from "styled-components";
import { Link } from "react-router-dom";

const TabBar = () => {
  return (
    <TabContainer>
      <Tab to="/">우리 동네 실시간 운취</Tab>
      <Tab to="/">운취 랭킹</Tab>
      <Tab to="/">오늘의 운동</Tab>
    </TabContainer>
  );
};

export default TabBar;

const TabContainer = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background: linear-gradient(0deg, #f0ffed, #f0ffed), #e1deff;
  padding: 0 30px;
`;

const Tab = styled(Link)`
  flex: 1;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #070707;
  &:hover {
    color: #a0cbbc;
  }
`;
