import React from "react";
import { Route, Switch } from "react-router-dom";
import { BasicModal } from "./components/modalAdd";
import { Navegation } from "./components/navegation";
import { TabsButton } from "./components/tabs";
import { AppStyle } from "./styles/style";

export function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Modal = () => {
    return (
      <>
        <TabsButton />
        <BasicModal
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
        />
      </>
    );
  };

  const path = "/" + process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE;

  return (
    <body className="App-header">
      <Switch>
        <Route path="/" exact component={TabsButton} />
        <Route path={path} exact component={Modal} />
      </Switch>

      <AppStyle />
      <Navegation />
    </body>
  );
}
