import React from 'react';

import ExpenseForm from '../components/ExpenseForm';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <ExpenseForm />
        <ExpensesTable />
      </div>
    );
  }
}

export default Wallet;
