import { AppBar, Tab, Tabs, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { dayObject } from '../../data/data';
import { useAnime } from '../../hooks/useAnime';
import { useJikan } from '../../hooks/useJikan';
import { inputObj } from '../../model/animes';
import { MediaCard } from '../card';
import { Filter } from '../filtro';
import { CardDisplay, Container, Display, override, theme } from './style';

export function TabsButton() {
  const [value, setValue] = useState(0);
  const { Animes, animesBase, getWeekDay, isLoadingAnime } = useAnime();
  const { Jikan, isLoading } = useJikan();

  useEffect(() => {
    setValue(getWeekDay());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <AppBar position='static' sx={{ background: '#121212' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            onClick={animesBase}
            variant='scrollable'
            scrollButtons={true}
            textColor='primary'
            indicatorColor='primary'
            allowScrollButtonsMobile={true}
            sx={{
              background: '#121212',
              m: '0 auto',
              '.MuiTabs-scrollButtons': {
                color: '#fff',
              },
              minHeight: '50px',
              '@media (max-width: 420px)': {
                m: '0',
              },
            }}>
            <Tab label='todos' />
            <Tab label='Segunda' />
            <Tab label='Terça' />
            <Tab label='Quarta' />
            <Tab label='Quinta' />
            <Tab label='Sexta' />
            <Tab label='Sábado' />
            <Tab label='Domingo' />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <Filter />
          {isLoading === false ? (
            <MediaCard animes={Jikan} day='todos' />
          ) : (
            <ClipLoader color={'#121212'} css={override} size={200} />
          )}
        </TabPanel>
        {dayObject.map((week: inputObj) => {
          return (
            <TabPanel value={value} index={week.number} key={week.number}>
              {isLoadingAnime === false ? (
                <MediaCard animes={Animes} day={week.value} />
              ) : (
                <ClipLoader color={'#121212'} css={override} size={200} />
              )}
            </TabPanel>
          );
        })}
      </Container>
    </ThemeProvider>
  );
}

function TabPanel(props: any) {
  const { children, value, index } = props;
  return (
    <>
      {value === index && (
        <Display>
          <CardDisplay>{children}</CardDisplay>
        </Display>
      )}
    </>
  );
}
