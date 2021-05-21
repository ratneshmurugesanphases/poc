import React from "react";
import Scheduler from "atoms/Scheduler";
import CustomDateRangePicker from "atoms/DateRangePicker";
import { CalendarViewContextProvider } from "contexts/CalendarViewContext";
import LogoutButton from "atoms/LogoutButton";

function CalendarView() {

  return (
    <CalendarViewContextProvider>
      <LogoutButton />
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
export default CalendarView;
