import React from "react";
import Scheduler from "atoms/Scheduler";
import CustomDateRangePicker from "atoms/CustomDateRangePicker";
import { CalendarViewContextProvider } from "contexts/CalendarViewContext";

function DhtmlxDefaultView() {
  return (
    <CalendarViewContextProvider>
      <div className="scheduler-container">
        <Scheduler />
        <CustomDateRangePicker
        // classes={classes}
        // fromToDates={fromToDates}
        // label={"Selected Date Range"}
        // handleDateChange={handleDateChange}
        />
        {/* <Link
        to={{
          pathname: `/contact/D`,
          state: { background: useLocation().location },
        }}
      >
        Switch
      </Link> */}
      </div>
    </CalendarViewContextProvider>
  );
}
export default DhtmlxDefaultView;
