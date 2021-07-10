import React, { Component } from 'react';

export default class ExpenseRow extends Component {
  render() {
    return (
      <table className="expenses-header" border="1" width="100%">
        <tr>
          <th width="100vh">Descrição</th>
          <th width="100vh">Tag</th>
          <th width="100vh">Método de pagamento</th>
          <th width="100vh">Valor</th>
          <th width="100vh">Moeda</th>
          <th width="100vh">Câmbio utilizado</th>
          <th width="100vh">Valor convertido</th>
          <th width="100vh">Moeda de conversão</th>
          <th width="100vh">Editar/Excluir</th>
        </tr>
      </table>
    );
  }
}
