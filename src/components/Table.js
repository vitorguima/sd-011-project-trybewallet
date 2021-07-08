import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Table extends Component {
  constructor() {
    super();

    this.buttonDelete = this.buttonDelete.bind(this);
  }

  buttonDelete(value) {
    const { deleteExpenses } = this.props;

    return (
      <button
        type="button"
        onClick={ () => deleteExpenses(value.id) }
        data-testid="delete-btn"
      >
        {' '}
        delete
      </button>
    );
  }

  // buttonEdit(value) {
  //   return (
  //     <button
  //       type="button"
  //       onClick={ () => deleteExpenses(value.id) }
  //       data-testid="delete-btn"
  //     >
  //       {' '}
  //       Editar
  //     </button>
  //   );
  // }

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
            <th>Valor convertido </th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((value, index) => (
            <tr key={ index }>
              <td>{ value.description }</td>
              <td>{ value.tag }</td>
              <td>{ value.method }</td>
              <td>{ value.value }</td>
              <td>{ value.exchangeRates[value.currency].name }</td>
              <td>{ (Number(value.exchangeRates[value.currency].ask).toFixed(2)) }</td>
              <td>
                { (Number(value.exchangeRates[value.currency]
                  .ask * value.value).toFixed(2)) }
              </td>
              <td>Real</td>
              <td>
                {this.buttonDelete(value)}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    );
  }
}

Table.propTypes = {
  coins: PropTypes.array,
  getApi: PropTypes.func,
  expenses: PropTypes.array,
}.isRequired;