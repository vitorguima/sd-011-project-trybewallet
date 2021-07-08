import React from 'react';
import Header from '../components/Header';
import EnterExpense from '../components/EnterExpense';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <EnterExpense />
      </div>
    );
  }
}

export default Wallet;
