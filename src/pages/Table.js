import React from 'react';
import Expenses from './Expenses';

class Form extends React.Component {
  render() {
    const myTableStyle = {
      backgroundColor: '#5A189A',
      textAlign: 'center',
      width: '100%',
    }

    const myTRStyle = {
      border: '1px solid #ddd',
    }

    const myTHStyle = {
      border: '1px solid #ddd',
    }
    return (
      <div>
        <table style={myTableStyle}>
          <tbody>
            <tr style={myTRStyle}>
              <th style={myTHStyle}>Descrição</th>
              <th style={myTHStyle}>Tag</th>
              <th style={myTHStyle}>Método de pagamento</th>
              <th style={myTHStyle}>Valor</th>
              <th style={myTHStyle}>Moeda</th>
              <th style={myTHStyle}>Câmbio utilizado</th>
              <th style={myTHStyle}>Valor convertido</th>
              <th style={myTHStyle}>Moeda de conversão</th>
              <th style={myTHStyle}>Editar/Excluir</th>
            </tr>
            <Expenses />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form;
