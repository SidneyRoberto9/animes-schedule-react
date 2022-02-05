import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Busca } from './components/busca';
import { FormAdd } from './components/formAdd';
import { Navegation } from './components/navegation';
import { TabsButton } from './components/tabs';
import { AppStyle } from './styles/style';

export function App() {
  const path = "/" + process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE;

  return (
    <>
      <body className="App-header">
        <Switch>
          <Route path="/" exact component={TabsButton} />
          <Route path={path} exact component={FormAdd} />
          <Route path="/search" exact component={Busca} />
        </Switch>

        <AppStyle />
      </body>
      <Navegation />
    </>
  );
}
