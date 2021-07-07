import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <div>Hello, TrybeWallet, here I am!</div>
      <Route exat path="/" component={ Login } />
      <Route exat path="/carteira" component={ Wallet } />
    </div>
  );
}
export default App;
