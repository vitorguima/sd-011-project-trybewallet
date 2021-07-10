import React from 'react';
import { useSelector } from 'react-redux';

export default function TotalField() {
  const userEmail = useSelector((state) => state.user.email);
  const savedExpenses = useSelector((state) => state.wallet.expenses);
  const expensesWithRates = savedExpenses
    .map((item) => Number(item.exchangeRates[item.currency].ask) * Number(item.value));
  return (
    <div>
      <div data-testid="email-field">
        {userEmail}
      </div>
      <div data-testid="total-field">
        {expensesWithRates.reduce((acc, curr) => {
          acc += curr;
          return acc;
        }, 0)}
      </div>
      <div data-testid="header-currency-field">
        BRL
      </div>
    </div>
  );
}
