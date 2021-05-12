import "dhtmlx-scheduler";
import "dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css";
import useScheduleController from "./hooks/useScheduleController";

function Scheduler() {
  const [schedulerContainer] = useScheduleController();
  return (
    <div
      ref={schedulerContainer}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
}

export default Scheduler;
