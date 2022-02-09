import { useEffect, useState } from 'react';

import Icon from '@material-ui/core/Icon';

import { Anime } from '../../model/animes';
import { Jikan } from '../../model/jikan';
import { jikanSearch } from '../../services/anime-schedule-api';
import { MediaCard } from '../card';
import { Container, Mid, Top } from './stlyle';

export const Busca = () => {
  const [Animes, setAnimes] = useState<Anime[]>([]);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");

  function handleChange(event: any) {
    if (event.key === "Enter") {
      setSearch(event.target.value);
      setValue(event.target.value);
    } else {
      setSearch(event.target.value);
    }
  }

  function handleClick() {
    setValue(search);
  }

  useEffect(() => {
    // other code
    jikanSearch.get("anime?q=" + search).then((res) => {
      const data = res.data.data;
      const anime: Anime[] = data.map((anime: Jikan) => {
        return {
          _id: anime.mal_id,
          title: anime.title,
          image_url: anime.images.jpg.image_url,
          weekday: "none",
          airing: anime.airing,
          external_links: [
            {
              name: "MyAnimeList",
              url: anime.url,
            },
          ],
        };
      });
      setAnimes(anime);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Container>
      <Top>
        <input
          type="search"
          name="busca"
          placeholder="Search..."
          onKeyDown={handleChange}
        />
        <button onClick={handleClick}>
          <Icon>search</Icon>
        </button>
      </Top>
      <Mid>
        <MediaCard animes={Animes} day="todos" />
      </Mid>
    </Container>
  );
};
