import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "./style";
import { Anime, AnimeProps } from "../../model/animes";

export function MediaCard(animes: AnimeProps) {
  return (
    <Container>
      {animes.animes.map((anime) => {
        if (anime.weekday === animes.day) {
          return (
            <div className="card-anime" key={anime._id}>
              <img src={anime.image_url} alt={anime.title} />
              <span className="title">{anime.title}</span>
            </div>
          );
        } else if (animes.day == "todos") {
          return (
            <div className="card-anime" key={anime._id}>
              <img src={anime.image_url} alt={anime.title} />
              <span className="title">{anime.title}</span>
            </div>
          );
        } else {
          return null;
        }
      })}
    </Container>
  );
}
