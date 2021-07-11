import React, { Component } from 'react';
import ExpenseAmount from './ExpenseAmount';
import ExpenseDescription from './ExpenseDescription';
import SelectedTypeCoin from './SelectedTypeCoin';
import PaymentType from './PaymentType';
import CategoryTagExpense from './CategoryTagExpense';

class FormWallet extends Component {
  render() {
    return (
      <form>
        <ExpenseAmount />
        <ExpenseDescription />
        <SelectedTypeCoin />
        <PaymentType />
        <CategoryTagExpense />
      </form>
    );
  }
}

export default FormWallet;
