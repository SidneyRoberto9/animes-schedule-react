import { useContext, useState } from "react";
import { AppBar, Tab, Tabs, ThemeProvider } from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";
import { AnimeContext } from "../../context/anime";
import { jikanContext } from "../../context/jikan";
import { MediaCard } from "../card";
import { Filter } from "../filtro";
import { CardDisplay, Container, override, theme } from "./style";

export function TabsButton() {
  const [value, setValue] = useState(0);
  const { Animes, animesBase, isLoadingAnime } = useContext(AnimeContext);
  const { Jikan, isLoading } = useContext(jikanContext);

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
          {isLoading === false ? (
            <MediaCard animes={Jikan} day="todos" />
          ) : (
            <ClipLoader color={"#121212"} css={override} size={200} />
          )}
        </TabPanel>
        {dayObj.map((week) => {
          return (
            <TabPanel value={value} index={week.dayNumber} key={week.dayNumber}>
              {isLoadingAnime === false ? (
                <MediaCard animes={Animes} day={week.day} />
              ) : (
                <ClipLoader color={"#121212"} css={override} size={200} />
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
  return <>{value === index && <CardDisplay>{children}</CardDisplay>}</>;
}

const dayObj = [
  {
    day: "segunda",
    dayNumber: 1,
  },
  {
    day: "terca",
    dayNumber: 2,
  },
  {
    day: "quarta",
    dayNumber: 3,
  },
  {
    day: "quinta",
    dayNumber: 4,
  },
  {
    day: "sexta",
    dayNumber: 5,
  },
  {
    day: "sabado",
    dayNumber: 6,
  },
  {
    day: "domingo",
    dayNumber: 7,
  },
];
