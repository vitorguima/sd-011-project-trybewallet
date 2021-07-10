import React, { Component } from 'react';

class MainExpenseTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <>
        {expenses.map((expense) => (
          <thead key={expense.id}>
            <td name="description">{expense.description}</td>
            <td name="tag">{expense.tag}</td>
            <td name="payment-method">{expense.method}</td>
            <td name="value">{expense.value}</td>
            <td name="currency">{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
            <td name="exchange-used">{(expense.exchangeRates[expense.currency].ask * 1).toFixed(2)}</td>
            <td name="converted-value">{(expense.exchangeRates[expense.currency].ask * expense.value).toFixed(2)}</td>
            <td name="conversion-currency">Real</td>
          </thead>
        ))}
      </>

    );
  }
}

export default MainExpenseTable;
