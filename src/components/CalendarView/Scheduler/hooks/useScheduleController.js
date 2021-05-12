import { useEffect, useRef } from "react";
import getSchedulerData from "../utils";

const useController = () => {
  const schedulerContainer = useRef(null);

  useEffect((_) => {
    const scheduler = window.scheduler;
    const schedulerData = getSchedulerData();
    scheduler.skin = "material";
    scheduler.config.header = [
      "day",
      "week",
      "month",
      "date",
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
      console.log("onEventChanged", ev.text);
    });

    scheduler.attachEvent("onEventDeleted", (id, ev) => {
      console.log("onEventDeleted", ev.text);
    });
    scheduler._$initialized = true;
    console.log("initSchedulerEvents");

    scheduler.init(schedulerContainer.current, new Date(), "week");
    scheduler.parse(schedulerData);
    // scheduler.config.hour_date = state ? "%H:%i" : "%g:%i %A";
    scheduler.config.hour_date = "%g:%i %A";
    scheduler.templates.hour_scale = scheduler.date.date_to_str(
      scheduler.config.hour_date
    );

    return () => {
      scheduler.clearAll();
    };
  }, []);

  console.log("useController");

  return [schedulerContainer];
};

export default useController;
