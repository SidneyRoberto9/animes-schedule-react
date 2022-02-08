import { AppBar, createTheme, Tab, Tabs, ThemeProvider } from "@mui/material";
import { MediaCard } from "../card";
import { Container, CardDisplay } from "./style";
import { Filter } from "../filtro";
import { AnimeContext } from "../../context/anime";
import { useContext, useState } from "react";
import { jikanContext } from "../../context/jikan";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e3f2fd",
    },
  },
});

export function TabsButton() {
  const [value, setValue] = useState(0);
  const { Animes, animesBase } = useContext(AnimeContext);
  const { Jikan } = useContext(jikanContext);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <AppBar position="static" sx={{ background: "#121212" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            onClick={animesBase}
            variant="scrollable"
            scrollButtons={true}
            textColor="primary"
            indicatorColor="primary"
            allowScrollButtonsMobile={true}
            sx={{
              background: "#121212",
              m: "0 auto",
              ".MuiTabs-scrollButtons": {
                color: "#fff",
              },
              "@media (max-width: 420px)": {
                m: "0",
              },
            }}
          >
            <Tab label="todos" />
            <Tab label="Segunda" />
            <Tab label="Terça" />
            <Tab label="Quarta" />
            <Tab label="Quinta" />
            <Tab label="Sexta" />
            <Tab label="Sábado" />
            <Tab label="Domingo" />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <Filter />
          <MediaCard animes={Jikan} day="todos" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MediaCard animes={Animes} day="segunda" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MediaCard animes={Animes} day="terca" />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <MediaCard animes={Animes} day="quarta" />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <MediaCard animes={Animes} day="quinta" />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <MediaCard animes={Animes} day="sexta" />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <MediaCard animes={Animes} day="sabado" />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <MediaCard animes={Animes} day="domingo" />
        </TabPanel>
      </Container>
    </ThemeProvider>
  );
}

function TabPanel(props: any) {
  const { children, value, index } = props;
  return <>{value === index && <CardDisplay>{children}</CardDisplay>}</>;
}
