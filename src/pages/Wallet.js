import React from 'react';
import Header from '../components/Header';
import EnterExpense from '../components/EnterExpense';
import TableExpenses from '../components/TableExpenses';
import '../styles/Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="page-wallet">
        <Header />
        <EnterExpense />
        <TableExpenses />
      </div>
    );
  }
}

export default Wallet;
