import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import NotFound from './pages/NotFound';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={(props) => <Login {...props} />} />
        <Route exact path="/clients" render={(props) => <Wallet {...props} />} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
