import React from "react";
import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  console.log(2);
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="검색어를 입력하세요." />
      <SearchIcon />
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 2px solid #d6d6d6;
  box-shadow: 2px 3px 7px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  &::before {
    content: "|";
    position: absolute;
    left: 20px;
    color: #d6d6d6;
    font-size: 20px;
    font-weight: 500;
  }
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  min-width: 400px;
  font-size: 16px;
  padding: 10px 40px;
  border: 0;
  border-radius: 30px;
`;

const SearchIcon = styled(RiSearchLine)`
  position: absolute;
  right: 20px;
  width: 20px;
  height: 20px;
  color: #001e6c;
`;
