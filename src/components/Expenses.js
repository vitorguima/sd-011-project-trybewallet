import React from 'react';
import './Expenses.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense, getExpense } from '../actions';

class Expenses extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target: { name, dataset } }) {
    const { removeExpenseAction, getExpenseAction } = this.props;
    if (name === 'remove') {
      removeExpenseAction(dataset.id);
    }
    if (name === 'edit') {
      getExpenseAction(dataset.id);
    }
  }

  render() {
    const { expenses } = this.props;
    return (
      <tbody className="expenses-table-body">
        { expenses.map((expense) => {
          const { id, value, description, currency, method, tag } = expense;
          const { exchangeRates: { [currency]: { ask, name } } } = expense;
          return (
            <tr key={ id }>
              <td className="description">{ description }</td>
              <td className="expense-tag">{ tag }</td>
              <td className="method">{ method }</td>
              <td className="value">{ value }</td>
              <td className="currency">{ name }</td>
              <td className="exchange">{ parseFloat(ask).toFixed(2) }</td>
              <td className="converted">{ (value * ask).toFixed(2) }</td>
              <td className="currency-converted">Real</td>
              <td className="buttons">
                <button
                  className="button is-small"
                  type="button"
                  data-testid="edit-btn"
                  name="edit"
                  data-id={ id }
                  onClick={ this.handleClick }
                >
                  &#128395;
                </button>
                <button
                  className="button is-small"
                  type="button"
                  data-testid="delete-btn"
                  name="remove"
                  data-id={ id }
                  onClick={ this.handleClick }
                >
                  &#128465;
                </button>
              </td>
            </tr>
          );
        }) }
      </tbody>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  removeExpenseAction: PropTypes.func.isRequired,
  getExpenseAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseAction: (expenseId) => dispatch(removeExpense(expenseId)),
  getExpenseAction: (expenseId) => dispatch(getExpense(expenseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
