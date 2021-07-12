import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delExpenseAction, changeFormMenu } from '../actions';

class Expenses extends React.Component {
  constructor() {
    super();

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(id) {
    const { deleteExpense } = this.props;
    deleteExpense(id);
  }

  render() {
    const { expenses, changeMenu } = this.props;
    const myTRStyle = {
      border: '1px solid #ddd',
    };

    const myTDStyle = {
      border: '1px solid #ddd',
    };
    return expenses.map((expense, index) => (
      <tr key={ index } style={ myTRStyle }>
        <td style={ myTDStyle }>{expense.description}</td>
        <td style={ myTDStyle }>{expense.tag}</td>
        <td style={ myTDStyle }>{expense.method}</td>
        <td style={ myTDStyle }>{expense.value}</td>
        <td style={ myTDStyle }>
          {expense.exchangeRates[expense.currency].name.split('/')[0]}
        </td>
        <td style={ myTDStyle }>
          {parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}
        </td>
        <td style={ myTDStyle }>
          {(
            expense.value * expense.exchangeRates[expense.currency].ask
          ).toFixed(2)}
        </td>
        <td style={ myTDStyle }>Real</td>
        <td style={ myTDStyle }>
          <button
            type="button"
            data-testid="edit-btn"
            onClick={ () => changeMenu(true, expense.id) }
          >
            Editar
          </button>
          /
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => this.handleDeleteClick(expense.id) }
          >
            Excluir
          </button>
        </td>
      </tr>
    ));
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
  };
}

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(delExpenseAction(id)),
  changeMenu: (bool, expenseID) => dispatch(changeFormMenu(bool, expenseID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any),
  deleteExpense: PropTypes.func.isRequired,
  changeMenu: PropTypes.func.isRequired,
};

Expenses.defaultProps = {
  expenses: [],
};
