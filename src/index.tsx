import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { AnimeContextProvider } from './hooks/useAnime';
import { JikanContextProvider } from './hooks/useJikan';
import { IndexStyle } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <AnimeContextProvider>
      <JikanContextProvider>
        <BrowserRouter>
          <App />
          <IndexStyle />
        </BrowserRouter>
      </JikanContextProvider>
    </AnimeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
