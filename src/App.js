import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import store from './store';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <div className="title">Hello, TrybeWallet!</div>
          <Route path="/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
