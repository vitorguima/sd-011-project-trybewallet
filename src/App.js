import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <>
      <h1>TrybeWallet</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
