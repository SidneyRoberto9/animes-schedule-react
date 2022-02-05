import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import { Anime, ModalProps } from "../../model/animes";
import { api } from "../../services/anime-schedule-api";
import { Container, style } from "./style";

export function BasicModal(props: ModalProps) {
  const [Animes, setAnimes] = React.useState<Anime>();

  const data = {} as Anime;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    data.title = event.target.value;
    console.log(data.title);
  };

  function handleSubmit() {
    setAnimes(data);

    api.post("animes", Animes);
  }

  return (
    <Container>
      <Button onClick={props.handleOpen}>Add Anime</Button>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            label="Title"
            type="Title"
            value={data.title}
            onChange={handleChange}
          />
          <TextField
            label="Title_english"
            type="Title_english"
            value={data.title_english}
            onChange={handleChange}
          />
          <TextField
            label="Title_Japanese"
            type="Title_Japanese"
            value={data.title_Japanese}
            onChange={handleChange}
          />
          <TextField
            label="Image_url"
            type="Image_url"
            value={data.image_url}
            onChange={handleChange}
          />
          <TextField
            label="Type"
            type="Type"
            value={data.type}
            onChange={handleChange}
          />
          <TextField
            label="Episodes"
            type="Episodes"
            value={data.episodes}
            onChange={handleChange}
          />
          <TextField
            label="Status"
            type="Status"
            value={data.status}
            onChange={handleChange}
          />
          <TextField
            label="Airing"
            type="Airing"
            value={data.airing}
            onChange={handleChange}
          />
          <TextField
            label="weekday"
            type="weekday"
            value={data.weekday}
            onChange={handleChange}
          />
          <TextField
            label="rating"
            type="rating"
            value={data.rating}
            onChange={handleChange}
          />
          <TextField
            label="synopsis"
            type="synopsis"
            value={data.synopsis}
            onChange={handleChange}
          />
          <TextField
            label="premiered"
            type="premiered"
            value={data.premiered}
            onChange={handleChange}
          />
          <TextField
            label="producers"
            type="producers"
            value={data.producers}
            onChange={handleChange}
          />
          <TextField
            label="licensors"
            type="licensors"
            value={data.licensors}
            onChange={handleChange}
          />
          <TextField
            label="studios"
            type="studios"
            value={data.studios}
            onChange={handleChange}
          />
          <TextField
            label="genres"
            type="genres"
            value={data.genres}
            onChange={handleChange}
          />
        </Box>
      </Modal>
    </Container>
  );
}
