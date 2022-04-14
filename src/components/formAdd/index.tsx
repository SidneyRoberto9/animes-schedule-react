import React from "react";

import { Scope } from "@unform/core";
import { Form } from "@unform/web";

import { Anime } from "../../model/animes";
import { api } from "../../services/anime-schedule-api";
import { Input } from "../input";

import { Container } from "./style";
import { dayObject, launchStated, season, year } from "../../data/data";

export function FormAdd() {
  function handleSubmit(data: Anime, { reset }: any) {
    api.post("animes", data);

    reset();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="title" label="Titulo" type="input" />
        <Input name="image_url" label="Url Image" type="input" />
        <Input
          name="weekday"
          label="Dia da Semana"
          type="select"
          values={dayObject}
        />
        <Input
          name="airing"
          label="Esta lançando? (true or false)"
          type="select"
          values={launchStated}
        />
        <Input name="year" label="Ano" type="select" values={year} />
        <Input name="premiered" label="Estação" type="select" values={season} />
        <Scope path="external_links[0]">
          <Input name="nome" label="Nome do Site Para Assistir" type="input" />
          <Input name="url" label="Link do Site" type="input" />
        </Scope>
        <button type="submit">Save</button>
      </Form>
    </Container>
  );
}
