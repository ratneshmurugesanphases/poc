import React from "react";

import "monday-ui-react-core/dist/main.css";
import Dashboard from "monday-ui-react-core/dist/icons/Dashboard";
import Add from "monday-ui-react-core/dist/icons/Add";
import Remove from "monday-ui-react-core/dist/icons/Remove";

// import { Button, LoadingButtonWrapper } from "monday-ui-react-core";
import Button from "monday-ui-react-core/dist/Button";
// import LoadingButtonWrapper from "monday-ui-react-core/dist/LoadingButtonWrapper";

import DndGrid from "./components/DndGrid";

import "./styles.scss";

export default function MondayView() {
  return (
    <>
      <Button>
        <Dashboard />
        Dashboard
      </Button>
      <Button
        rightFlat
        kind={Button.kinds.SECONDARY}
        size={Button.sizes.SMALL}
        preventClickAnimation
        ariaLabel="decrease zoom level"
      >
        <Remove />
      </Button>
      <Button
        leftFlat
        kind={Button.kinds.SECONDARY}
        size={Button.sizes.SMALL}
        preventClickAnimation
        ariaLabel="increase zoom level"
      >
        <Add />
      </Button>
      <DndGrid />
    </>
  );
}
