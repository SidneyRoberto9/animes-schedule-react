import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { AnimeContextProvider } from "./context/anime";
import { IndexStyle } from "./styles/index";

ReactDOM.render(
  <React.StrictMode>
    <AnimeContextProvider>
      <BrowserRouter>
        <App />
        <IndexStyle />
      </BrowserRouter>
    </AnimeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
