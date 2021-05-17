import { useEffect, useRef, useContext, useState } from "react";
// import { getDate, getMonth, getYear } from "date-fns";
import { useLocation } from "react-router-dom";

import { DateRangePickerContext } from "contexts/DateRangePickerContext";
import getSchedulerData from "helpers/getSchedulerData";

const scheduler = window.scheduler;
const useScheduleController = () => {
  const schedulerContainerRef = useRef(null);
  const { customDateRangePickerRef } = useContext(DateRangePickerContext);
  const [currentDateRange, setCurrentDateRange] = useState("");
  const [currLoc, setCurrLoc] = useState(useLocation());

  // const [currentLocation, setCurrentLocation] = useState(useLocation());

  //TODO - use baseConfig for default values
  useEffect(
    (_) => {
      const schedulerData = getSchedulerData();
      const currentRef = customDateRangePickerRef;

      scheduler.skin = "material";
      scheduler.config.header = [
        "day",
        "week",
        "spacer",
        "spacer",
        {
          view: "date",
          click: () =>
            currentRef &&
            currentRef.current &&
            currentRef.current.setShowDatePicker(
              (showDatePicker) => !showDatePicker
            ),
        },
        "spacer",
        {
          html: "RESERVE",
          click: () => alert("Book events"),
        },
        "spacer",
        "prev",
        "today",
        "next",
      ];
      scheduler.config.fix_tab_position = false;
      scheduler.config.hour_date = "%g:%i %A";
      scheduler.xy.scale_width = 70;
      scheduler.config.icons_select = ["icon_delete"];

      if (scheduler._$initialized) {
        return;
      }
      scheduler.attachEvent("onEventAdded", (id, ev) => {
        console.log("onEventAdded", ev.text);
      });

      scheduler.attachEvent("onEventChanged", (id, ev) => {
        console.log("onEventChanged", ev);
      });

      scheduler.attachEvent("onEventDeleted", (id, ev) => {
        console.log("onEventDeleted", ev.text);
      });

      scheduler.attachEvent("onViewChange", function (new_mode, new_date) {
        console.log("onViewChange", { new_mode, new_date });
        // const date = getDate(new_date);
        // const month = getMonth(new_date);
        // const year = getYear(new_date);
        const date = scheduler.getState().date;
        const minDate = scheduler.getState().min_date;
        const maxDate = scheduler.getState().max_date;

        // scheduler.updateView(new Date(2012,5,3), "day");
        // setCurrentDateRange(new_date);
        // console.log("date", {date, month, year});
        console.log("date", { minDate, date, maxDate });

        customDateRangePickerRef.current.setDateRange([
          {
            startDate: minDate,
            endDate: maxDate,
            key: "selection",
          },
        ]);
      });

      scheduler._$initialized = true;
      console.log("initSchedulerEvents");

      scheduler.init(schedulerContainerRef.current, new Date(), "week");
      scheduler.parse(schedulerData);
      // scheduler.config.hour_date = state ? "%H:%i" : "%g:%i %A";
      scheduler.config.hour_date = "%g:%i %A";
      scheduler.templates.hour_scale = scheduler.date.date_to_str(
        scheduler.config.hour_date
      );

      return () => {
        scheduler.clearAll();
        // setCurrentLocation("");
        setCurrLoc("");
        console.log("Scheduler cleaned-up", currLoc);
      };
    },
    [customDateRangePickerRef, currLoc]
  );

  console.log("outside", currLoc);

  // const [path, setPath] = useState("");
  // const { pathname } = useLocation();
  // console.log("pathname", pathname);

  // useEffect(() => {
  //   console.log("Schedule useEffect");
  //   setPath(pathname);
  //   return () => {
  //   };
  // }, [path, pathname]);

  console.log("useScheduleController", currentDateRange);

  return [schedulerContainerRef, setCurrentDateRange];
};

export default useScheduleController;
