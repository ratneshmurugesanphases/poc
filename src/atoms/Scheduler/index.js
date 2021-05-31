import LogoutButton from "atoms/LogoutButton";
import SearchField from "atoms/SearchField";
import NewBookingForm from "molecules/NewBookingForm";
import EditBookingForm from "molecules/EditBookingForm";
import { StyledScheduler, StyledToolbar } from "./styles";

import useScheduler from "./hooks/useScheduler";
import "./styles.scss";

const Scheduler = () => {
  const { schedulerRef, handleSearchChange } = useScheduler();
  console.log("Scheduler - index.js");

  return (
    <>
      {/* <LogoutButton /> */}
      <StyledScheduler>
        <StyledToolbar>
          {/* <div style={{ width: "200px" }}>
            <SearchField
              // searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
            />
          </div> */}
        </StyledToolbar>
        <div
          id="scheduler_here"
          className="dhx_cal_container"
          style={{ maxWidth: "100%", height: "100%" }}
          key="scheduler_here"
          ref={schedulerRef}
        ></div>
      </StyledScheduler>
      <NewBookingForm />
      <EditBookingForm />
    </>
  );
};

export default Scheduler;
