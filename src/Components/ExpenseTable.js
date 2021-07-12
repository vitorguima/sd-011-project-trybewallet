import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpenseTable extends React.Component {
  convertValue(value, currency, exchangeRates) {
    const result = exchangeRates ? value * exchangeRates[currency].ask
      : parseFloat(value);
    return result.toFixed(2);
  }

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
        {/* { expenses.map(({ id, value, description, currency, method, tag, exchangeRates }) => (
          <tr key={ id }>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ value }</td>
            <td>{ currency }</td>
            <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
            <td>{ Number(exchangeRates[currency].ask) * Number(value).toFixed(2) }</td>
            <td>Real</td>
            <td>{ exchangeRates[currency].name }</td>
            <button type="button">Editar/Excluir</button>
          </tr>
        ))} */}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);

ExpenseTable.propTypes = {
  expenses: PropTypes.array,
}.isRequired;