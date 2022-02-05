import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { IndexStyle } from "./styles/index";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <IndexStyle />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
