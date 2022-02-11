import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { AnimeContextProvider } from "./context/anime";
import { JikanContextProvider } from "./context/jikan";
import { SearchContextProvider } from "./context/search";
import { IndexStyle } from "./styles/index";

ReactDOM.render(
  <React.StrictMode>
    <AnimeContextProvider>
      <JikanContextProvider>
        <SearchContextProvider>
          <BrowserRouter>
            <App />
            <IndexStyle />
          </BrowserRouter>
        </SearchContextProvider>
      </JikanContextProvider>
    </AnimeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
