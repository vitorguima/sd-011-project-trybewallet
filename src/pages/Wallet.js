import React from 'react';
import Header from '../components/Header';
import SpendForm from '../components/SpendForm';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SpendForm />
        <ExpensesTable />
      </div>
    );
  }
}

export default Wallet;
