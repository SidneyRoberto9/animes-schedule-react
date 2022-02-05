import styled from "styled-components";

export const Container = styled.div`
  .MuiButton-root {
    position: absolute;
    top: 5px;
    right: 2%;
    background-color: #f0f8ff;
    &:hover {
      background-color: #bde0ff;
    }
  }

  TextField {
    & + TextField {
      padding-left: 10px;
    }
  }
`;

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
