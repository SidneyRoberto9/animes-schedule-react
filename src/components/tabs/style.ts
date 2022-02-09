import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;

  .MuiAppBar-root {
    background: "#121212";
  }
  .MuiTab-root {
    color: #ababab;
  }
`;

export const CardDisplay = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 1601px) {
    width: 79%;
  }

  @media (max-width: 1367px) {
    width: 78%;
  }

  @media (max-width: 1280px) {
    width: 77%;
  }

  @media (max-width: 1025px) {
    width: 76%;
  }

  @media (max-width: 415px) {
    padding-left: 30px;
    width: 100%;
  }

  @media (max-width: 391px) {
    padding-left: 10px;
    width: 100%;
  }

  @media (max-width: 376px) {
    width: 100%;
  }

  @media (max-width: 361px) {
    padding-left: 0px;
    width: 100%;
  }
`;
