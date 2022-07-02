import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://animes-schedule-api.herokuapp.com',
});

export const jikanSeason = axios.create({
  baseURL: 'https://api.jikan.moe/v4/seasons/',
});
