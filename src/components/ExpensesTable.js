import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpensesTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        { expenses.map((celula, index) => (
          <tr key={ index }>
            <td>
              { celula.description }
            </td>
            <td>
              { celula.tag }
            </td>
            <td>
              { celula.method }
            </td>
            <td>
              { celula.value }
            </td>
            <td>
              { celula.exchangeRates[celula.currency].name }
            </td>
            <td>
              { parseFloat(celula.exchangeRates[celula.currency].ask).toFixed(2) }
            </td>
            <td>
              { parseFloat((celula.exchangeRates[celula.currency].ask * celula.value)
                .toFixed(2)) }
            </td>
            <td>
              Real
            </td>
            <td>
              algo aqui
            </td>
          </tr>))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.objectOf(PropTypes.object).isRequired,
};
