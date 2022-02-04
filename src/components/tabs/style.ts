import { Tab, Tabs } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Tabs)`
  background-color: #121212;
`;

export const tabled = styled(Tab)`
  color: #121212;

  :hover {
    color: #fff;
  }
`;
