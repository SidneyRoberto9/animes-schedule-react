import * as React from "react";

import { Container } from "./style";

export function Navegation() {
  return (
    <Container>
      <div className="list">
        <input type="button" value="Segunda" />
        <input type="button" value="Terça" />
        <input type="button" value="Quarta" />
        <input type="button" value="Quinta" />
        <input type="button" value="Sexta" />
        <input type="button" value="Sábado" />
        <input type="button" value="Domingo" />
      </div>
    </Container>
  );
}
