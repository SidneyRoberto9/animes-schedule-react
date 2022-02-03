import React from "react";
import { AppStyle } from "./styles/style";
import logo from "./assets/logo.svg";
import { MediaCard } from "./components/card";
import { Anime } from "./model/animes";
import { api } from "./services/anime-schedule-api";
import { BasicModal } from "./components/modalAdd";

export function App() {
  const [Animes, setAnimes] = React.useState<Anime[]>([]);

  React.useEffect(() => {
    api.get("animes").then((response) => setAnimes(response.data));
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App-header">
      <header>
        <BasicModal
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
        />
      </header>

      <AppStyle />
      <main>
        <MediaCard animes={Animes} />
      </main>
    </div>
  );
}
