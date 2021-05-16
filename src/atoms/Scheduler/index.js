import "dhtmlx-scheduler";
import "dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css";
import useScheduleController from "../../hooks/useScheduleController";

import './Scheduler.scss';

const Scheduler = () => {
  const [schedulerContainer] = useScheduleController();
  console.log("Scheduler");
  return (
    <div
      id="scheduler_here"
      ref={schedulerContainer}
      className="dhx_cal_container"
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default Scheduler;
