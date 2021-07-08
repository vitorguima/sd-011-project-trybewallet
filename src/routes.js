import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Pocket from './components/Pocket';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Pocket } />
      </Switch>
    );
  }
}

export default Routes;
