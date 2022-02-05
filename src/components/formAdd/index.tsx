import React from "react";
import { Scope } from "@unform/core";
import { Form } from "@unform/web";
import { Input } from "../input";
import { Container } from "./style";
import { Anime } from "../../model/animes";
import { api } from "../../services/anime-schedule-api";

export function FormAdd() {
  function handleSubmit(data: Anime, { reset }: any) {
    api.post("animes", data);

    reset();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Anime</h1>

        <Input name="title" label="Titulo" />
        <Input name="image_url" label="Url Image" />
        <Input name="weekday" label="Dia da Semana" />
        <Input name="airing" label="Esta lançando?" />
        <Scope path="external_links[0]">
          <Input name="nome" label="External Nome do Site" />
          <Input name="url" label="External URL do Site" />
        </Scope>

        <button type="submit">Save</button>
      </Form>
    </Container>
  );
}
