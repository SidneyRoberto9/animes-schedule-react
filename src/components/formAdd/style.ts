import styled from "styled-components";

export const Container = styled.body`
  * {
    box-sizing: border-box;
    outline: 0;
    font: 14px "Poppins";
    font-weight: 300;
  }

  #root {
    margin: 0 auto;
    max-width: 330px;
    width: 100%;
    padding: 40px 0;
  }

  form {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  form h1 {
    text-align: center;
    font-size: 44px;
  }

  label {
    display: block;

    margin-bottom: 5px;
    margin-left: 10%;
  }

  input,
  button {
    margin: 0 auto;
  }

  input {
    width: 80%;
    margin-bottom: 15px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;
  }

  input:focus {
    border-color: #111;
  }

  button {
    display: block;
    background: #111;
    color: #fff;
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    width: 80%;
    padding: 16px;

    font-size: 15px;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #000;
  }
`;
