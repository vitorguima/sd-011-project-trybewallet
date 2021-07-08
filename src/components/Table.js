import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Metodo de Pagamento</th>
            <th>value</th>
            <th>Moeda</th>
            <th>Câmbio ultilizado</th>
            <th>valor convertido </th>
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
              <td>{ value.currency }</td>
              <td>{ (Number(value.exchangeRates[value.currency].ask).toFixed(2)) }</td>
              <td>
                { (Number(value.exchangeRates[value.currency]
                  .ask * value.value).toFixed(2)) }
              </td>
              <td>REAL</td>
            </tr>
          ))}
        </tbody>

      </table>
    );
  }
}
