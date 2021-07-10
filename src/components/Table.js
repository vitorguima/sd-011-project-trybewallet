import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
          { expenses.map((exp, index) => {
            const { description, tag, method, value, exchangeRates, currency } = exp;
            const valueFloat = Number.parseFloat(value);
            const currencyName = (exchangeRates[currency].name)
              .replace('/Real Brasileiro', '');
            const ask = (Number.parseFloat(exchangeRates[currency].ask));
            return (
              <tr key={ index }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>
                  {valueFloat}
                </td>
                <td>{currencyName}</td>
                <td>{ask.toFixed(2)}</td>
                <td>{(ask * valueFloat).toFixed(2)}</td>
                <td>Real</td>
                <td>Editar/excluir</td>
              </tr>
            );
          }) }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(Table);
