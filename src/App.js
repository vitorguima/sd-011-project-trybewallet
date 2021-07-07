import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <>
      <h1>Hello, TrybeWallet!</h1>
      <switch>
        <Route exact path="/" component={ Login } />
      </switch>
    </>
  );
}

export default App;
