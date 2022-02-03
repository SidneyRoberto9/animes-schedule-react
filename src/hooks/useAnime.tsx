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
