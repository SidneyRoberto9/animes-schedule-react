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
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: 1201px) {
    padding-left: 0px;
    width: 60%;
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    padding-left: 0;
    width: 70%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding-left: 0;
    width: 80%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding-left: 0;
    width: 90%;
  }

  @media (min-width: 360px) and (max-width: 480px) {
    padding-left: 0;
    width: 100%;
  }
`;
