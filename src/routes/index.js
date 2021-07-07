import React from 'react';
import { Route } from 'react-router';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

function Routes() {
  return (
    <>
      <Route exact path="/" component={ Login } />
      <Route path="/carteira" component={ Wallet } />
    </>
  );
}

export default Routes;
