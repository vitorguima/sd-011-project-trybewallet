import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
// import './App.css';
// import { connect } from 'react-redux';
// import { fetchPokemon } from './actions/index.js';

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </div>
    );
  }
}

export default App;
