import { createContext, ReactNode, useEffect, useState } from "react";

import { Anime } from "../model/animes";
import { api } from "../services/anime-schedule-api";
interface AnimeContextData {
  Animes: Anime[];
  animesBase: () => void;
  getWeekDay: () => number;
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
    await api.get("animes/2022/Winter").then((response) => {
      setAnimes(response.data);
    });
    setIsLoadingAnime(false);
  }

  function getWeekDay() {
    const day = new Date().getDay();
    switch (day) {
      case 0:
        return 7;
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      case 4:
        return 4;
      case 5:
        return 5;
      case 6:
        return 6;
      default:
        return day;
    }
  }

  useEffect(() => {
    animesBase();
  }, []);

  return (
    <AnimeContext.Provider
      value={{ Animes, animesBase, getWeekDay, isLoadingAnime }}
    >
      {children}
    </AnimeContext.Provider>
  );
}
