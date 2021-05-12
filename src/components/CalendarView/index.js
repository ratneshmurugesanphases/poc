import React from "react";
import Scheduler from "./Scheduler";

function DhtmlxDefaultView() {
  return (
    <div className="scheduler-container">
      <Scheduler />
      {/* <Link
        to={{
          pathname: `/contact/D`,
          state: { background: useLocation().location },
        }}
      >
        Switch
      </Link> */}
    </div>
  );
}
export default DhtmlxDefaultView;


