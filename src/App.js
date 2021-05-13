import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import CalendarView from "pages/CalendarView";
import SlateApp from "pages/MasterSlave/SlateApp";
import MondayView from "pages/MondayView";

import Home from "pages/Routing/Home";
import Contacts from "pages/Routing/Contacts";
import Modal from "pages/Routing/Modal";

// import "./App.css";

function App() {
  // const location = useLocation() || "";
  // const background = location.state && location.state.background;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/calendar-view" exact component={CalendarView} />
        <Route path="/master-slave" exact component={SlateApp} />
        <Route path="/monday-view" exact component={MondayView} />
      </Switch>
      {<Route path="/contact/:name" children={<Modal />} />}
    </BrowserRouter>
  );
}
export default App;
