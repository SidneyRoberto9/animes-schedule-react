import styled from 'styled-components';

import { css } from '@emotion/react';
import { createTheme } from '@mui/material';

export const Container = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;

  .MuiAppBar-root {
    background: '#121212';
  }
  .MuiTab-root {
    color: #ababab;
  }
`;

export const CardDisplay = styled.div`
  @media (min-width: 1201px) {
    width: 60%;
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

export const Display = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const theme = createTheme({
  palette: {
    primary: {
      main: '#e3f2fd',
    },
  },
});

export const override = css`
  display: block;
  margin: 0 auto;
  align-self: center;
  margin-top: 25%;
`;
