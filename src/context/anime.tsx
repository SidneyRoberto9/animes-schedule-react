import { createContext, ReactNode, useEffect, useState } from "react";

import { Anime } from "../model/animes";
import { api } from "../services/anime-schedule-api";

interface AnimeContextData {
  Animes: Anime[];
  animesBase: () => void;
}

export const AnimeContext = createContext<AnimeContextData>(
  {} as AnimeContextData
);

type AnimeContextProps = {
  children: ReactNode;
};

export function AnimeContextProvider({ children }: AnimeContextProps) {
  const [Animes, setAnimes] = useState<Anime[]>([]);

  async function animesBase() {
    await api.get("animes").then((response) => {
      setAnimes(response.data);
    });
  }

  useEffect(() => {
    animesBase();
  }, []);

  return (
    <AnimeContext.Provider value={{ Animes, animesBase }}>
      {children}
    </AnimeContext.Provider>
  );
}
