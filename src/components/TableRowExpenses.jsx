import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class TableRowExpenses extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <tr>
        <td>{expenses.description}</td>
        <td>{expenses.tag}</td>
        <td>{expenses.method}</td>
        <td>{expenses.value}</td>
        <td>{expenses.exchangeRates[expenses.currency].name}</td>
        <td>{Number(expenses.exchangeRates[expenses.currency].ask).toFixed(2)}</td>
        <td>
          {
            (Number(expenses.exchangeRates[expenses.currency].ask)
              * Number(expenses.value)).toFixed(2)
          }

        </td>
        <td>Real</td>
      </tr>
    );
  }
}

TableRowExpenses.propTypes = {
  expenses: PropTypes.shape({
    currency: PropTypes.string,
    description: PropTypes.string,
    exchangeRates: PropTypes.oneOfType([PropTypes.object]),
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};
