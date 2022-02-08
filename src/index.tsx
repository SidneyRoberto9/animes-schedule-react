import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { AnimeContextProvider } from "./context/anime";
import { JikanContextProvider } from "./context/jikan";
import { IndexStyle } from "./styles/index";

ReactDOM.render(
  <React.StrictMode>
    <AnimeContextProvider>
      <JikanContextProvider>
        <BrowserRouter>
          <App />
          <IndexStyle />
        </BrowserRouter>
      </JikanContextProvider>
    </AnimeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
