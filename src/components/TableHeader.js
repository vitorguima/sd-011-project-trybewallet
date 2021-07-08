import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/index';

class TableHeader extends Component {
  render() {
    const { expenses, tag, removeExpense } = this.props;

    return expenses.map((expense, index) => {
      let toRender = '';

      switch (tag) {
      case 'currency':
        toRender = expense.exchangeRates[expense.currency].name;
        break;

      case 'exchange':
        toRender = Number(
          expense.exchangeRates[expense.currency].ask,
        ).toFixed(2);
        break;

      case 'convertedValue':
        toRender = (
          expense.exchangeRates[expense.currency].ask * expense.value
        ).toFixed(2);
        break;

      case 'conversionCurrency':
        toRender = 'Real';
        break;

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
        toRender = expense[tag];
      }

      return <td key={ index }>{toRender}</td>;
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
