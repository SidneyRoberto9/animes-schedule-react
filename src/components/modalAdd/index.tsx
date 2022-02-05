import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import { Anime, ModalProps } from '../../model/animes';
import { api } from '../../services/anime-schedule-api';
import { Container, style } from './style';

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
            autoComplete="current-Title"
            value={data.title}
            onChange={handleChange}
          />
        </Box>
      </Modal>
    </Container>
  );
}
