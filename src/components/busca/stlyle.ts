import styled from "styled-components";
import { css } from "@emotion/react";

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
    left: 14%;
    width: 70%;
    margin: 0 auto;
    border: none;
    padding-left: 10px;
    font-size: 0.9em;
    outline: none;
  }

  button {
    left: 80%;
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
  max-width: 100%;
  display: flex;
  margin: 0 auto;
  padding-top: 40px;

  @media (min-width: 1201px) {
    width: 79%;
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 70%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 90%;
  }

  @media (min-width: 360px) and (max-width: 480px) {
    width: 100%;
  }
`;

export const override = css`
  display: block;
  margin: 0 auto;
  align-self: center;
  margin-top: 25%;
`;
