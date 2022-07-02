import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { FormAdd } from './components/formAdd';
import { TabsButton } from './components/tabs';
import { AppStyle } from './styles/style';

export function App() {
  const path = '/' + process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE;

  return (
    <div className='App-header'>
      <Switch>
        <Route path='/' exact component={TabsButton} />
        <Route path={path} exact component={FormAdd} />
      </Switch>

      <AppStyle />
    </div>
  );
}
