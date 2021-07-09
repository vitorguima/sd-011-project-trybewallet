import React from 'react';
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
      <tbody>
        { expenses.map((expense) => {
          const { id, value, description, currency, method, tag } = expense;
          const { exchangeRates: { [currency]: { ask, name } } } = expense;
          return (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ name }</td>
              <td>{ parseFloat(ask).toFixed(2) }</td>
              <td>{ (value * ask).toFixed(2) }</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="edit-btn"
                  name="edit"
                  data-id={ id }
                  onClick={ this.handleClick }
                >
                  &#128395;
                </button>
                <button
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
