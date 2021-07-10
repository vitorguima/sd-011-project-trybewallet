import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Router>
        Hello, TrybeWallet!!
        <Switch>
          <Route exact path="/" render={ () => <Login /> } />
          <Route path="/carteira" render={ () => <Wallet /> } />
        </Switch>
      </Router>
    </div>);
}

export default App;
