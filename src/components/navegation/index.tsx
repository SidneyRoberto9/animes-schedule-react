import React from "react";

import { Container } from "./style";

export function Navegation() {
  return (
    <Container>
      <footer className="list">
        <input type="button" value="Calendário" />
        <input type="button" value="Busca" />
      </footer>
    </Container>
  );
}
