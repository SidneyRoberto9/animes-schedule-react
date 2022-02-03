import React from "react";
import { AppStyle } from "./style";
import logo from "../../assets/logo.svg";
import MediaCard from "../card";

export function App() {
  return (
    <div className="App-header">
      <main>
        <MediaCard />
      </main>

      <AppStyle />
    </div>
  );
}
