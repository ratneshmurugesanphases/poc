import React from "react";
import Scheduler from "atoms/Scheduler";
import { CommonContextProvider } from "contexts/CommonContext";

function CalendarView() {
  return (
    <CommonContextProvider>
      <Scheduler />
    </CommonContextProvider>
  );
}
export default CalendarView;
