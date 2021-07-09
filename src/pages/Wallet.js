import React from 'react';
import Header from '../components/Header';
import NewExpenseForm from '../components/NewExpenseForm';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <NewExpenseForm />
        <ExpensesTable />
      </>
    );
  }
}

export default Wallet;
