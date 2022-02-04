import * as React from "react";
import {
  AppBar,
  Box,
  createTheme,
  Tab,
  Tabs,
  ThemeProvider,
} from "@mui/material";
import { MediaCard } from "../card";
import { api } from "../../services/anime-schedule-api";
import { Anime } from "../../model/animes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e3f2fd",
    },
  },
});

export function TabsButton() {
  const [value, setValue] = React.useState(0);
  const [Animes, setAnimes] = React.useState<Anime[]>([]);

  React.useEffect(() => {
    api.get("animes").then((response) => setAnimes(response.data));
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box width="100%">
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            textColor="primary"
            indicatorColor="primary"
            allowScrollButtonsMobile
            centered={true}
            sx={{ bgcolor: "#121212" }}
          >
            <Tab label="todos" sx={{ color: "#fff" }} />
            <Tab label="Segunda" sx={{ color: "#fff" }} />
            <Tab label="Terça" sx={{ color: "#fff" }} />
            <Tab label="Quarta" sx={{ color: "#fff" }} />
            <Tab label="Quinta" sx={{ color: "#fff" }} />
            <Tab label="Sexta" sx={{ color: "#fff" }} />
            <Tab label="Sábado" sx={{ color: "#fff" }} />
            <Tab label="Domingo" sx={{ color: "#fff" }} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <MediaCard animes={Animes} day="todos" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MediaCard animes={Animes} day="segunda" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MediaCard animes={Animes} day="terça" />
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
      </Box>
    </ThemeProvider>
  );
}

function TabPanel(props: any) {
  const { children, value, index } = props;
  return <div>{value === index && <div>{children}</div>}</div>;
}
