import { useRef, useEffect } from "react";
// import { getDate, getMonth, getYear } from "date-fns";
import { useDateRangePickerDeps } from "contexts/DateRangePickerContext";
import getSchedulerData from "helpers/getSchedulerData";

const scheduler = window.scheduler;
const useScheduleController = () => {
  const schedulerContainerRef = useRef(null);
  const { customDateRangePickerRef } = useDateRangePickerDeps();
  const currentRef = customDateRangePickerRef;
  // const [currentRef] = useState(customDateRangePickerRef);

  //TODO - use baseConfig for default values
  useEffect((_) => {
    const schedulerData = getSchedulerData();
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

      currentRef.current.setDateRange([
        {
          startDate: minDate,
          endDate: maxDate,
          key: "selection",
        },
      ]);

      currentRef &&
        currentRef.current &&
        currentRef.current.setDateRange([
          {
            startDate: minDate,
            endDate: maxDate,
            key: "selection",
          },
        ]);
    });

    console.log("initSchedulerEvents");

    scheduler.init(schedulerContainerRef.current, new Date(), "week");
    scheduler.parse(schedulerData);
    // scheduler.config.hour_date = state ? "%H:%i" : "%g:%i %A";
    scheduler.config.hour_date = "%g:%i %A";
    scheduler.templates.hour_scale = scheduler.date.date_to_str(
      scheduler.config.hour_date
    );
    scheduler._$initialized = false; // to be false to re-render

    return () => {
      scheduler.clearAll();
    };
  });

  console.log("useScheduleController", currentRef);

  return [schedulerContainerRef];
};

export default useScheduleController;
