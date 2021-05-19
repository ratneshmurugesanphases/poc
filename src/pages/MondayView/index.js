import React from "react";
import styled from "styled-components";

import LogoutButton from "atoms/LogoutButton";
import DndGrid from "molecules/DndGrid";
import SideMenuList from "molecules/SideMenuList";

import { MondayViewContextProvider } from "contexts/MondayViewContext";

const StyledMondayView = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

export default function MondayView() {
  return (
    <MondayViewContextProvider>
      <div style={{ margin: "20px 0px" }}>
        <LogoutButton />
        <StyledMondayView>
          <SideMenuList />
          <div style={{ padding: "0px 50px" }}>
            {/* <Toolbar /> */}
            <DndGrid />
          </div>
        </StyledMondayView>
      </div>
    </MondayViewContextProvider>
  );
}
