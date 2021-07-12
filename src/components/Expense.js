import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Expense extends React.Component {
  render() {
    const { expenses } = this.props;
    const tableHeader = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <div>
        <table>
          <thead>
            <tr>
              { tableHeader.map((string, index) => (<th key={ index }>{ string }</th>)) }
            </tr>
          </thead>
          <tbody>
            { expenses.map((
              { description, tag, method, value, exchangeRates, currency }, index,
            ) => (
              <tr key={ index }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
                <td>{ Number(value * exchangeRates[currency].ask).toFixed(2) }</td>
                <td>Real</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Expense);

Expense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
