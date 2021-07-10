import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainExpenseTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table className="expenses-body" border="1">
        {expenses.map((expense) => (
          <tr key={ expense.id }>
            <th name="description">{expense.description}</th>
            <th name="tag">{expense.tag}</th>
            <th name="payment-method">{expense.method}</th>
            <th name="value">{expense.value}</th>
            <th
              name="currency"
            >
              {expense.exchangeRates[expense.currency].name.split('/')[0]}
            </th>
            <th
              name="exchange-used"
            >
              {(expense.exchangeRates[expense.currency].ask * 1).toFixed(2)}
            </th>
            <th
              name="converted-value"
            >
              {(expense.exchangeRates[expense.currency].ask * expense.value).toFixed(2)}
            </th>
            <th name="conversion-currency">Real</th>
          </tr>
        ))}

      </table>
    );
  }
}

export default MainExpenseTable;

MainExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
