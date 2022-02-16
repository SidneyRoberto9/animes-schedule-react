import { createContext, ReactNode, useEffect, useState } from "react";

import { Anime } from "../model/animes";
import { api } from "../services/anime-schedule-api";

interface AnimeContextData {
  Animes: Anime[];
  animesBase: () => void;
  isLoadingAnime: boolean;
}

export const AnimeContext = createContext<AnimeContextData>(
  {} as AnimeContextData
);

type AnimeContextProps = {
  children: ReactNode;
};

export function AnimeContextProvider({ children }: AnimeContextProps) {
  const [Animes, setAnimes] = useState<Anime[]>([]);
  const [isLoadingAnime, setIsLoadingAnime] = useState<boolean>(false);

  async function animesBase() {
    setIsLoadingAnime(true);
    await api.get("animes").then((response) => {
      setAnimes(response.data);
    });
    setIsLoadingAnime(false);
  }

  useEffect(() => {
    animesBase();
  }, []);

  return (
    <AnimeContext.Provider value={{ Animes, animesBase, isLoadingAnime }}>
      {children}
    </AnimeContext.Provider>
  );
}
