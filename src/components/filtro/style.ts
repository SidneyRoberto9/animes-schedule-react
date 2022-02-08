import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 10px;

  select,
  button {
    font-family: "Roboto";
    font-weight: 500;
    width: 20%;
    height: 30px;
    border: none;
    color: #ababab;
    background: #121212;
    text-align: center;
    & + select,
    & + button {
      margin-left: 10px;
    }
  }

  select:focus {
    transition: 0.4s;
    color: #fff;
  }

  button:hover {
    transition: 0.9s;
    color: #fff;
    background-color: #ababab;
  }
`;
