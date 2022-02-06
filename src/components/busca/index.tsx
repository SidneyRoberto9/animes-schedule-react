import { Container, Top, Mid } from "./stlyle";

import Icon from "@material-ui/core/Icon";

export const Busca = () => {
  return (
    <Container>
      <Top>
        <input type="search" name="busca" placeholder="Search..." />
        <button>
          <Icon>search</Icon>
        </button>
      </Top>
      <Mid></Mid>
    </Container>
  );
};
