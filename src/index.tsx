import { IndexStyle } from "./styles/index";

import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <IndexStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
