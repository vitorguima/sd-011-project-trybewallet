import React from 'react';
import { Route, Switch } from 'react-router';
import LoginPage from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact patch="/" component={ LoginPage } />
    </Switch>
  );
}

export default App;
