import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
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
          { expenses.map((exp, index) =>(
            <tr key={ index } >
              <td>{exp.description}</td>
              <td>{exp.tag}</td>
              <td>{exp.method}</td>
              <td>
                {Number.parseFloat(exp.value)}
              </td>
              <td>{(exp.exchangeRates[exp.currency].name).replace('/Real Brasileiro', '')}</td>
              <td>{Number.parseFloat(exp.exchangeRates[exp.currency].ask).toFixed(2)}</td>
              <td>{(Number.parseFloat(exp.exchangeRates[exp.currency].ask) * Number.parseFloat(exp.value)).toFixed(2)}</td>
              <td>Real</td>
              <td>Editar/excluir</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
