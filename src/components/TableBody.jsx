import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchCurrency, deleteExpense } from '../actions';

class TableBody extends Component {
  render() {
    const { expenses, deleteExpenses } = this.props;
    console.log('expenses', expenses);
    return (
      <tbody>
        { expenses.map((e) => (
          <tr key={ e.id }>
            <td>{ e.description }</td>
            <td>{ e.tag }</td>
            <td>{ e.method }</td>
            <td>{ e.value }</td>
            <td>{ e.exchangeRates[e.currency].name.split('/')[0] }</td>
            <td>{ parseFloat(e.exchangeRates[e.currency].ask).toFixed(2) }</td>
            <td>
              { parseFloat(
                e.value * e.exchangeRates[e.currency].ask,
              ).toFixed(2) }
            </td>
            <td>Real</td>
            <td>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => deleteExpenses(e) }
              >
                Deletar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrency()),
  deleteExpenses: (expense) => dispatch(deleteExpense(expense)),
});

TableBody.propTypes = {
  expenses: PropTypes.oneOfType([PropTypes.array]).isRequired,
  deleteExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
