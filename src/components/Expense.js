import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from '../actions';

class Expense extends React.Component {
  render() {
    const { expenses, deleteExpense } = this.props;
    const tableHeader = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <div>
        <table>
          <thead>
            <tr>
              { tableHeader.map((string, index) => (<th key={ index }>{ string }</th>)) }
            </tr>
          </thead>
          <tbody>
            { expenses.map((
              { description, tag, method, value, exchangeRates, currency, id },
            ) => (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
                <td>{ Number(value * exchangeRates[currency].ask).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => deleteExpense(id) }
                  >
                    DELETE
                  </button>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(action.removeExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expense);

Expense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};
