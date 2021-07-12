import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/index';

class TableHeader extends Component {
  render() {
    const { expenses, tag, removeExpense } = this.props;

    return expenses.map((expense, index) => {
      switch (tag) {
      case 'currency':
        return (
          <td key={ index }>{expense.exchangeRates[expense.currency].name}</td>
        );

      case 'exchange':
        return (
          <td key={ index }>
            {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
          </td>
        );

      case 'convertedValue':
        return (
          <td key={ index }>
            {(expense.exchangeRates[expense.currency].ask * expense.value).toFixed(2)}
          </td>
        );

      case 'conversionCurrency':
        return <td key={ index }>Real</td>;

      case 'button':
        return (
          <div key={ index }>
            <button type="button">Editar</button>
            <button
              onClick={ () => removeExpense(expense.id) }
              type="button"
              data-testid="delete-btn"
            >
              Excluir
            </button>
          </div>
        );

      default:
        return <td key={ index }>{expense[tag]}</td>;
      }
    });
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expense) => dispatch(deleteExpense(expense)),
});

export default connect(null, mapDispatchToProps)(TableHeader);

TableHeader.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  tag: PropTypes.string.isRequired,
  removeExpense: PropTypes.func.isRequired,
};
