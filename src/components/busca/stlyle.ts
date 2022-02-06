import styled from "styled-components";

export const Container = styled.body`
  header {
    margin: 0 auto;
  }
`;

export const Top = styled.header`
  position: relative;
  height: 5vh;
  input,
  button {
    position: absolute;
    top: 25px;
    height: 50px;
    background: #121212;
    color: #ababab;
  }

  input {
    left: 10%;
    width: 80%;
    border: none;
    padding-left: 10px;
    font-size: 0.9em;
    outline: none;
  }

  button {
    left: 90%;
    width: 50px;
    cursor: pointer;
    border: none;
  }

  @media (max-width: 768px) {
    input {
      left: 10%;
      width: 75%;
    }

    button {
      left: 80%;
      width: 50px;
    }
  }
`;

export const Mid = styled.main`
  padding-top: 40px;
`;
