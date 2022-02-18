import { createContext, ReactNode, useEffect, useState } from "react";

import { Anime } from "../model/animes";
import { Jikan } from "../model/jikan";
import { jikanSearch } from "../services/anime-schedule-api";

interface SearchContextData {
  handleChange: (event: any) => void;
  handleClick: () => void;
  Animes: Anime[];
  isLoading: boolean;
}

export const SearchContext = createContext<SearchContextData>(
  {} as SearchContextData
);

type searchContextProps = {
  children: ReactNode;
};

export function SearchContextProvider({ children }: searchContextProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [Animes, setAnimes] = useState<Anime[]>([]);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const BetterAnimeLink = "https://betteranime.net/anime/legendado/";

  function formatLink(link: string) {
    link = link.toLowerCase();
    link = link.replace(" (tv)", "");
    link = link.replace(/:/g, "");
    link = link.replace(/ /g, "-");

    return link;
  }

  function handleChange(event: any) {
    if (event.key === "Enter") {
      setValue(event.target.value);
    }
    setSearch(event.target.value);
  }

  function handleClick() {
    setValue(search);
  }

  async function searchJikan() {
    setIsLoading(true);
    await jikanSearch.get("anime?q=" + search).then((res) => {
      const data = res.data.data;
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
              name: "MyAnimeList",
              url: BetterAnimeLink + url,
            },
          ],
        };
      });
      setAnimes(anime);
    });
    setIsLoading(false);
  }

  useEffect(() => {
    searchJikan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <SearchContext.Provider
      value={{ handleChange, handleClick, Animes, isLoading }}
    >
      {children}
    </SearchContext.Provider>
  );
}
