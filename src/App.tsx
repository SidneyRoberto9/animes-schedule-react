import React from "react";
import { AppStyle } from "./styles/style";
import { MediaCard } from "./components/card";
import { Anime } from "./model/animes";
import { api } from "./services/anime-schedule-api";
import { BasicModal } from "./components/modalAdd";
import { Navegation } from "./components/navegation";
import { TabsButton } from "./components/tabs";

export function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <body className="App-header">
      <TabsButton />
      {/* <BasicModal
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
        />*/}

      <AppStyle />
      <Navegation />
    </body>
  );
}
