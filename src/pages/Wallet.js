import React from 'react';
import Header from '../components/Header';
import NewExpense from '../components/NewExpenses';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NewExpense />
        <Expenses />
      </div>
    );
  }
}

export default Wallet;
