import React from "react";
import { AppStyle } from "./styles/style";
import { Navegation } from "./components/navegation";
import { TabsButton } from "./components/tabs";

export function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <body className="App-header">
      <TabsButton />
      {/* <BasicModal
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
        />*/}

      <AppStyle />
      <Navegation />
    </body>
  );
}
