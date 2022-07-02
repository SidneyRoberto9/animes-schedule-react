import { AnimeProps } from '../../model/animes';
import { Container } from './style';

export function MediaCard(animes: AnimeProps) {
  function ViewAnime(url: string) {
    window.open(url);
  }

  return (
    <Container>
      {animes.animes.map((anime) => {
        if (anime.weekday === animes.day && anime.airing) {
          return (
            <div
              className="card-anime"
              key={anime._id}
              onClick={() => ViewAnime(anime.external_links[0].url)}
            >
              <img src={anime.image_url} alt={anime.title} />
              <span className="title">{anime.title}</span>
            </div>
          );
        } else if (animes.day === "todos") {
          return (
            <div
              className="card-anime"
              key={anime._id}
              onClick={() => ViewAnime(anime.external_links[0].url)}
            >
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
