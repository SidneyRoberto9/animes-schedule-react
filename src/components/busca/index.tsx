import { useContext } from "react";
import Icon from "@material-ui/core/Icon";
import { MediaCard } from "../card";
import { Container, Mid, override, Top } from "./stlyle";
import { ClipLoader } from "react-spinners";
import { SearchContext } from "../../context/search";

export const Busca = () => {
  const { handleChange, handleClick, isLoading, Animes } =
    useContext(SearchContext);

  return (
    <Container>
      <Top>
        <input
          type="search"
          name="busca"
          placeholder="Search..."
          onKeyDown={handleChange}
        />
        <button onClick={handleClick}>
          <Icon>search</Icon>
        </button>
      </Top>
      <Mid>
        {isLoading === false ? (
          <MediaCard animes={Animes} day="todos" />
        ) : (
          <ClipLoader color={"#121212"} css={override} size={200} />
        )}
      </Mid>
    </Container>
  );
};
