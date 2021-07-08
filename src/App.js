import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <div>Hello, TrybeWallet! #VQV</div>
      <Switch>
        <Route to path="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
