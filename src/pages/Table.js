import React from 'react';
import Count from './Count';

// auxiliar component for Forms
// render product details
class Forms extends React.Component {
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
            <Count />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Forms;
