import React, { useState } from "react";

// import { Link, useLocation } from "react-router-dom";

import Scheduler from "./Scheduler";
// import Toolbar from "./Toolbar";
// import MessageArea from "./MessageArea";

const data = [];

function DhtmlxDefaultView() {
  const [dhtmlxState, setState] = useState({
    currentTimeFormatState: true,
    messages: [],
  });

  const addMessage = (message) => {
    const maxLogLength = 5;
    const newMessage = { message };
    const messages = [newMessage, ...dhtmlxState.messages];

    if (messages.length > maxLogLength) {
      messages.length = maxLogLength;
    }
    setState({ ...dhtmlxState, messages });
  };

  const logDataUpdate = (action, ev, id) => {
    const formattedDate = new Date(ev.id).getUTCDate();
    const text = ev && ev.text ? ` (${ev.text})` : "";
    const message = `event ${action}: ${formattedDate} ${text}`;
    addMessage(message);
  };

  // const handleTimeFormatStateChange = (state) => {
  //   setState({
  //     ...dhtmlxState,
  //     currentTimeFormatState: state,
  //   });
  // };

  const { 
    currentTimeFormatState, 
    // messages 
  } = dhtmlxState;
  return (
    <div>
      {/* <div className="tool-bar">
        <Toolbar
          timeFormatState={currentTimeFormatState}
          onTimeFormatStateChange={handleTimeFormatStateChange}
        />
      </div> */}
      <div className="scheduler-container">
        <Scheduler
          events={data}
          timeFormatState={currentTimeFormatState}
          onDataUpdated={logDataUpdate}
        />
      </div>
      {/* <Link
        to={{
          pathname: `/contact/D`,
          state: { background: useLocation().location },
        }}
      >
        Switch
      </Link> */}
      {/* <MessageArea messages={messages} /> */}
    </div>
  );
}
export default DhtmlxDefaultView;
