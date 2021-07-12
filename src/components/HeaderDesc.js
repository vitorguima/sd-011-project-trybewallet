import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const HeaderDesc = (props) => {
  const { expenses } = props;
  return (
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
        { expenses.map(
          ({ description, tag, method, value, currency, exchangeRates }, index) => (
            <tr key={ index }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ exchangeRates[currency].name.split('/')[0] }</td>
              <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
              <td>
                { Number(exchangeRates[currency].ask)
                  * Number(value) }
              </td>
              <td>Real</td>
            </tr>
          ),
        ) }
      </tbody>
    </table>
  );
};
const mapStateProps = (state) => ({
  expenses: state.wallet.expenses,
});
export default connect(mapStateProps)(HeaderDesc);

HeaderDesc.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
