import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { api } from "../../services/anime-schedule-api";
import { Container } from "./style";
import { Anime } from "../../model/animes";

export default function MediaCard() {
  const [Animes, setAnimes] = React.useState<Anime[]>([]);

  React.useEffect(() => {
    api.get("animes").then((response) => setAnimes(response.data));
  }, []);

  return (
    <Container>
      {Animes.map((anime) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={anime._id}>
            <CardMedia
              component="img"
              height="140"
              image={anime.image_url}
              alt={anime.title}
            />
            <CardContent>{anime.title}</CardContent>
          </Card>
        );
      })}
    </Container>
  );
}
