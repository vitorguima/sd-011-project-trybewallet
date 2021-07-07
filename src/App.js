import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
// import Carteira from './pages/Carteira';

function App() {
  return (
    <div>
      Hello, TrybeWallet!
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          {/* <Route path="/carteira" component={ Carteira } /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
