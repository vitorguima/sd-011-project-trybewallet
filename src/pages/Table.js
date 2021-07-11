import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

const headerItens = ['Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir'];

class Table extends React.Component {
  render() {
    const { expenses, removeExpense } = this.props;
    return (
      <table>
        <thead>
          <tr>
            { headerItens.map((item, index) => <th key={ index }>{ item }</th>) }
          </tr>
        </thead>
        <tbody>
          { expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>
                { (expense.exchangeRates[expense.currency].name)
                  .replace('/Real Brasileiro', '') }
              </td>
              <td>
                { parseFloat(expense.exchangeRates[expense.currency].ask)
                  .toFixed(2) }
              </td>
              <td>
                { parseFloat(expense.value)
              * parseFloat(expense.exchangeRates[expense.currency].ask) }
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="delete-btn"
                  onClick={ () => removeExpense(expense.id) }
                  type="button"
                >
                  Deletar
                </button>
              </td>
            </tr>)) }
        </tbody>
      </table>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expenseId) => dispatch(deleteExpense(expenseId)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Table);
