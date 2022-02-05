export interface Anime {
  _id: string;
  title: string;
  image_url: string;
  weekday: string;
  airing: boolean;
  external_links: link[];
}

interface link {
  nome: string;
  url: string;
}

export type AnimeProps = {
  animes: Anime[];
  day: string;
};

export type ModalProps = {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
};
