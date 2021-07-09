import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesTable extends React.Component {
  getConvertValue(value, currency, exchangeRates) {
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
        { expenses.map((
          { id, description, tag, method, value, exchangeRates, currency },
        ) => (
          <tr key={ id }>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{value}</td>
            <td>{exchangeRates[currency].name}</td>
            <td>{this.getConvertValue(exchangeRates[currency].ask)}</td>
            <td>{this.getConvertValue(value, currency, exchangeRates)}</td>
            <td>Real</td>
            <td>{}</td>
          </tr>
        )) }
      </table>
    );
  }
}

const mapStatetoProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStatetoProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
