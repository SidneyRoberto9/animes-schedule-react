import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Anime } from "../model/animes";
import { api } from "../services/anime-schedule-api";

interface AnimeContextData {
  Animes: Anime[];
  filterAnime: (props: filterProps) => void;
  animesBase: () => void;
}

export const AnimeContext = createContext<AnimeContextData>(
  {} as AnimeContextData
);

type AnimeContextProps = {
  children: ReactNode;
};

interface filterProps {
  year: string;
  premiered: string;
}

export function AnimeContextProvider({ children }: AnimeContextProps) {
  const [Animes, setAnimes] = useState<Anime[]>([]);

  function filterAnime(props: filterProps) {
    api.get("animes").then((response) => {
      setAnimes(
        response.data.filter(
          (anime: Anime) =>
            anime.year === props.year && anime.premiered === props.premiered
        )
      );
    });
  }

  function animesBase() {
    api.get("animes").then((response) => {
      setAnimes(response.data);
    });
  }

  useEffect(() => {
    animesBase();
  }, []);

  return (
    <AnimeContext.Provider value={{ Animes, filterAnime, animesBase }}>
      {children}
    </AnimeContext.Provider>
  );
}
