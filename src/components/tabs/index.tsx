import * as React from "react";

import { AppBar, createTheme, Tab, Tabs, ThemeProvider } from "@mui/material";

import { Anime } from "../../model/animes";
import { api } from "../../services/anime-schedule-api";
import { MediaCard } from "../card";
import { Container } from "./style";

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
  }, [Animes]);

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
            <Tab label="todos" sx={{ color: "#ababab" }} />
            <Tab label="Segunda" sx={{ color: "#ababab" }} />
            <Tab label="Terça" sx={{ color: "#ababab" }} />
            <Tab label="Quarta" sx={{ color: "#ababab" }} />
            <Tab label="Quinta" sx={{ color: "#ababab" }} />
            <Tab label="Sexta" sx={{ color: "#ababab" }} />
            <Tab label="Sábado" sx={{ color: "#ababab" }} />
            <Tab label="Domingo" sx={{ color: "#ababab" }} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <MediaCard animes={Animes} day="todos" />
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
  return <>{value === index && <Container>{children}</Container>}</>;
}
