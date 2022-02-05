import { AnimeProps } from "../../model/animes";
import { Container } from "./style";

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
        } else if (animes.day === "todos") {
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
