import React from 'react';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import history from './history';

function App() {
  return (
  <Router history={history}>
    <div>
      TrybeWallet
    </div>

    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/carteira" component={Wallet}/>
    </Switch>
  </Router>
  )
}

export default App;
