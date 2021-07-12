import React from 'react';

import Header from './Header';
import Category from '../components/Category';
import ExpenseAmount from '../components/ExpenseAmount';
import PaymentDescription from '../components/PaymentDescription';
import PaymentMethod from '../components/PaymentMethod';
import SelectedCurrency from '../components/SelectedCurrency';

function Wallet() {
  return (
    <div>
      <Header />
      <form>
        <ExpenseAmount />
        <PaymentDescription />
        <SelectedCurrency />
        <PaymentMethod />
        <Category />
      </form>
    </div>
  );
}

export default (Wallet);
