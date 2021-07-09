import React from 'react';
import Expenses from './Expenses';

class Form extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
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
            <Expenses />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form;
