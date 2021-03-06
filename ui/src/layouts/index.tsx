import React from "react";
import SideBar from "./SideBar";
import styled from "styled-components";

const SideBarContainer = styled.div`
  width: 120px;
`;

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const AppContainer = styled.div`
  flex: 1;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 32px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const Layouts: React.FC = ({ children }) => {
  return (
    <Screen>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <AppContainer>{children}</AppContainer>
    </Screen>
  );
};

export default Layouts;
