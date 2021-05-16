import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="ratnesh-phases.eu.auth0.com"
      clientId="UyZ7PUPXNGBLBsByZ837VfNGeQYjBKSL"
      redirectUri="http://localhost:3000/overview"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
