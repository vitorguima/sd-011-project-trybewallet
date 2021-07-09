import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/wallet';
import TableHeaders from './TableHeaders';

class ExpensesTable extends Component {
  render() {
    const { expenses, deleteExpenseFromState } = this.props;
    return (
      <table>
        <TableHeaders />
        <tbody>
          { expenses.map((expense, index) => (
            <tr key={ index }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>
                { (Object.values(expense.exchangeRates).find((cotacao) => (
                  cotacao.code === expense.currency
                )).name).split('/')[0]}
              </td>
              <td>
                { parseFloat(Object.values(expense.exchangeRates).find((cotacao) => (
                  cotacao.code === expense.currency)).ask).toFixed(2)}
              </td>
              <td>
                { Object.values(expense.exchangeRates).find((cotacao) => (
                  cotacao.code === expense.currency
                )).ask * expense.value}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  onClick={ () => deleteExpenseFromState(expense) }
                  data-testid="delete-btn"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseFromState: (expense) => dispatch(deleteExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  deleteExpenseFromState: PropTypes.func.isRequired,
};
