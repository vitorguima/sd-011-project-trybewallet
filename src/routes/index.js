import React from 'react';
import { Route } from 'react-router';
import Login from '../pages/Login';

function Routes() {
  return (
    <>
      <Route exact path="/" component={ Login } />
      <Route path="" />
    </>
  );
}

export default Routes;
