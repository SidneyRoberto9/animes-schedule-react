import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Anime } from "../model/animes";
import { api } from "../services/anime-schedule-api";

type AnimeInput = Omit<Anime, "_id" | "__v">;

interface AnimesProviderProps {
  children: ReactNode;
}

interface AnimeContextData {
  Animes: Anime[];
  createAnime: (Anime: AnimeInput) => Promise<void>;
}

export const AnimesContext = createContext<AnimeContextData>(
  {} as AnimeContextData
);

export function AnimesProvider({ children }: AnimesProviderProps) {
  const [Animes, setAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    api.get("").then((response) => {
      setAnimes(response.config.data);
    });
  }, []);

  async function createAnime(AnimeInput: AnimeInput) {
    const response = await api.post("", {
      ...AnimeInput,
    });
    const { anime } = response.data;

    setAnimes([...Animes, anime]);
  }

  return (
    <AnimesContext.Provider value={{ Animes, createAnime }}>
      {children}
    </AnimesContext.Provider>
  );
}

export function useAnimes() {
  const context = useContext(AnimesContext);

  return context;
}
