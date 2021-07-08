import React, { Component } from 'react';
import Header from '../components/Header';
import WalletRender from '../components/WalletRender';
import ExpensesRender from '../components/ExpensesRender';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <WalletRender />
        <ExpensesRender />
      </div>
    );
  }
}

export default Wallet;
