import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './style';

export function Navegation() {
  const history = useHistory();

  const handlePagina = (local: string) => {
    history.push(local);
  };

  return (
    <Container>
      <footer className="list">
        <input
          type="button"
          onClick={() => handlePagina("/")}
          value="Calendário"
        />
        <input
          type="button"
          onClick={() => handlePagina("/search")}
          value="Busca"
        />
      </footer>
    </Container>
  );
}
