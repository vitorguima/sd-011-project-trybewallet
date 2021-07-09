import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import './App.css';
import Wallet from './Pages/Wallet';

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/" render={ () => <Login /> } />
        <Route exact path="/carteira" render={ () => <Wallet /> } />

      </Switch>
    </div>
  );
}

export default App;
