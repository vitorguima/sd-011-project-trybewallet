import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delExpenseAction } from '../actions';

class Expenses extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(id) {
    const { deleteExpense } = this.props;
    deleteExpense(id)
  }

  render() {
    const { expenses } = this.props;
    return (
      expenses.map((expense, index) => (
        <tr key={ index }>
          <td>{expense.description}</td>
          <td>{expense.tag}</td>
          <td>{expense.method}</td>
          <td>{expense.value}</td>
          <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
          <td>{parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
          <td>
            {(expense.value * expense.exchangeRates[expense.currency].ask)
              .toFixed(2)}
          </td>
          <td>Real</td>
          <td>
            <span>Editar</span>
            /
            <button data-testid="delete-btn" onClick={() => this.handleClick(expense.id)}>Excluir</button>
          </td>
        </tr>
      ))
    );
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
  };
}

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(delExpenseAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any),
};

Expenses.defaultProps = {
  expenses: [],
};
