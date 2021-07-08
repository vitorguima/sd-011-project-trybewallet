import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
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
            {expenses.map((v, i) => (
              <tr key={ i }>
                <td>{v.description}</td>
                <td>{v.tag}</td>
                <td>{v.method}</td>
                <td>{v.value}</td>
                <td>{v.exchangeRates[v.currency].name}</td>
                <td>{Number(v.exchangeRates[v.currency].ask).toFixed(2)}</td>
                <td>
                  {(Number(v.exchangeRates[v.currency].ask) * Number(v.value)).toFixed(2)}
                </td>
                <td>Real</td>
                <td>{v.tag}</td>
              </tr>))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
