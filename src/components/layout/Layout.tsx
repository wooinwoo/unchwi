import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Wrap = styled.div``;

const Layout = ({ children }: any) => {
  return (
    <Wrap>
      <Header />
      {children}
    </Wrap>
  );
};

export default Layout;
