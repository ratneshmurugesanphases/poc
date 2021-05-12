import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import CalendarView from "./components/CalendarView";
import SlateApp from "./components/MasterSlave/SlateApp";

import Home from "./components/Routing/Home";
import Contacts from "./components/Routing/Contacts";
import Modal from "./components/Routing/Modal";

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
      </Switch>
      {<Route path="/contact/:name" children={<Modal />} />}
    </BrowserRouter>
  );
}
export default App;
