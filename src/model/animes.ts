export interface Anime {
  _id: number;
  title: string;
  image_url: string;
  weekday: string;
  airing: boolean;
  year: number | undefined;
  premiered: string;
  external_links: link[];
}

interface link {
  name: string;
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
