import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import DhtmlxDefaultView from "./components/DhtmlxDefaultView";
import SlateApp from "./components/MasterSlave/SlateApp";

import Home from "./components/ModalRouting/Home";
import Contacts from "./components/ModalRouting/Contacts";
import Modal from "./components/ModalRouting/Modal";

// import "./App.css";

function App() {
  // const location = useLocation() || "";
  // const background = location.state && location.state.background;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/dhtmlxdefaultview" exact component={DhtmlxDefaultView} />
        <Route path="/master-slave" exact component={SlateApp} />
      </Switch>
      {<Route path="/contact/:name" children={<Modal />} />}
    </BrowserRouter>
  );
}
export default App;
