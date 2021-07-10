import React, { Component } from 'react';

export default class ExpenseRow extends Component {
  render() {
    /* Para entender sobre a semântica dos elementos utilizados abaixo
    e no arquivo Wallet.js, leia a documentação abaixo.
    Source: https://www.w3schools.com/tags/tag_tbody.asp */
    return (
      <table className="expenses-header" border="1" width="100%">
        <thead>
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
        </thead>
      </table>
    );
  }
}
