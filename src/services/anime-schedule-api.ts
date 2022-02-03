import axios from "axios";

export const api = axios.create({
  baseURL: "https://animes-schedule-api.herokuapp.com/",
});
