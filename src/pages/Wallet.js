import React from 'react';
import Header from '../components/Header';
import NewExpenseForm from '../components/NewExpenseForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <NewExpenseForm />
      </>
    );
  }
}

export default Wallet;
