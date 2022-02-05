import axios from 'axios';

export const api = axios.create({
  baseURL: "https://animes-schedule-api.herokuapp.com",
});

export const jikan = axios.create({
  baseURL: "https://api.jikan.moe/v4/anime?q=",
});
