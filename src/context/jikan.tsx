import { createContext, ReactNode, useEffect, useState } from "react";

import { Anime } from "../model/animes";
import { Jikan } from "../model/jikan";
import { jikanSeason } from "../services/anime-schedule-api";

interface JikanContextData {
  Jikan: Anime[];
  filterAnime: (props: filterProps) => void;
  jikanBase: () => void;
  isLoading: boolean;
}

export const jikanContext = createContext<JikanContextData>(
  {} as JikanContextData
);

type jikanContextProps = {
  children: ReactNode;
};

interface filterProps {
  year: string;
  premiered: string;
}

export function JikanContextProvider({ children }: jikanContextProps) {
  const [Jikan, setJikan] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const ActualSeason = "2022/winter";
  const BetterAnimeLink = "https://betteranime.net/anime/legendado/";

  function formatLink(link: string) {
    link = link.toLowerCase();
    link = link.replace(" (tv)", "");
    link = link.replace(/:/g, "");
    link = link.replace(/ /g, "-");

    return link;
  }

  async function filterAnime(props: filterProps) {
    const premieredSeason = props.premiered.toLowerCase();
    const season = props.year + "/" + premieredSeason;

    setIsLoading(true);
    await jikanSeason.get(season).then((response) => {
      const data = response.data.data;
      const anime: Anime[] = data.map((anime: Jikan) => {
        const url = formatLink(anime.title);
        return {
          _id: anime.mal_id,
          title: anime.title,
          image_url: anime.images.jpg.image_url,
          weekday: "none",
          airing: anime.airing,
          external_links: [
            {
              name: "BetterAnime",
              url: BetterAnimeLink + url,
            },
          ],
        };
      });
      setIsLoading(false);
      setJikan(anime);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    });
  }

  async function jikanBase() {
    setIsLoading(true);
    await jikanSeason.get(ActualSeason).then((response) => {
      const data = response.data.data;
      const anime: Anime[] = data.map((anime: Jikan) => {
        const url = formatLink(anime.title);
        return {
          _id: anime.mal_id,
          title: anime.title,
          image_url: anime.images.jpg.image_url,
          weekday: "none",
          airing: anime.airing,
          external_links: [
            {
              name: "BetterAnime",
              url: BetterAnimeLink + url,
            },
          ],
        };
      });
      setIsLoading(false);
      setJikan(anime);
    });
  }

  useEffect(() => {
    jikanBase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <jikanContext.Provider value={{ Jikan, filterAnime, jikanBase, isLoading }}>
      {children}
    </jikanContext.Provider>
  );
}
