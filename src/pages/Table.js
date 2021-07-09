import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
  constructor() {
    super();
    this.renderTable = this.renderTable.bind(this);
  }

  renderTable() {
    const { expenses } = this.props;
    return expenses.map((expense) => (
      <tr key={ expense.id }>
        <th>{ expense.description }</th>
        <th>{ expense.tag }</th>
        <th>{ expense.method }</th>
        <th>{ expense.value }</th>
        <th>{ expense.currency }</th>
        <th>{ expense.exchangeRates[expense.currency].ask }</th>
        <th>
          { parseFloat(expense.value)
          * parseFloat(expense.exchangeRates[expense.currency].ask) }
        </th>
        <th>Real Brasileiro</th>
        <th>Aqui tem 2 Botoes</th>
      </tr>));
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
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
              <td>Aqui tem 2 Botoes</td>
            </tr>)) }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
