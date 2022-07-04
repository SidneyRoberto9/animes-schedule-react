import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { Anime } from '../model/animes';
import { api } from '../services/anime-schedule-api';

interface AnimeContextData {
  Animes: Anime[];
  animesBase: () => void;
  getWeekDay: () => number;
  isLoadingAnime: boolean;
}

export const AnimeContext = createContext<AnimeContextData>({} as AnimeContextData);

type AnimeContextProps = {
  children: ReactNode;
};

export function AnimeContextProvider({ children }: AnimeContextProps) {
  const [Animes, setAnimes] = useState<Anime[]>([]);
  const [isLoadingAnime, setIsLoadingAnime] = useState<boolean>(false);

  async function animesBase() {
    setIsLoadingAnime(true);

    let animesData = localStorage.getItem('animes');
    let time = localStorage.getItem('timeCache');
    let timeUpdate = 1000 * 60 * 60 * 24; // 24 horas

    if (!animesData) {
      await api.get('animes').then((response) => {
        let filterAnime: Anime[] = response.data
          .filter((anime: Anime) => anime.airing === true)
          .sort((a: Anime, b: Anime) => a.title.localeCompare(b.title));

        localStorage.setItem('animes', JSON.stringify(filterAnime));
        localStorage.setItem('timeCache', JSON.stringify(new Date().getTime()));
        setAnimes(filterAnime);
      });
    } else {
      if (time) {
        let data = {
          animes: JSON.parse(animesData),
          timeCache: JSON.parse(time),
        };

        if (new Date().getTime() - data.timeCache > timeUpdate) {
          localStorage.removeItem('animes');
          localStorage.setItem('timeCache', JSON.stringify(new Date().getTime()));
          window.location.reload();
        } else {
          setAnimes(data.animes);
        }
      }
    }

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
    <AnimeContext.Provider value={{ Animes, animesBase, getWeekDay, isLoadingAnime }}>
      {children}
    </AnimeContext.Provider>
  );
}

export const useAnime = () => {
  const context = useContext(AnimeContext);

  return context;
};
