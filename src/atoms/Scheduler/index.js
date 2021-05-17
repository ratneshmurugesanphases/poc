import "dhtmlx-scheduler";
import "dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css";
import useScheduleController from "../../hooks/useScheduleController";
import { withRouter } from "react-router-dom";

import "./Scheduler.scss";

const Scheduler = () => {
  const [schedulerContainerRef] = useScheduleController();

  console.log("Scheduler");
  return (
    <div
      id="scheduler_here"
      ref={schedulerContainerRef}
      className="dhx_cal_container"
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default withRouter(Scheduler);
