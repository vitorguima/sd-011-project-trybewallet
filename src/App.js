import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          {/* <Route exact path="/wallet" component={ Wallet } /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
