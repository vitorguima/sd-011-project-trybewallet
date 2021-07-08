import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header data-testid="email-field">{email}</header>
        <div>
          Despesa Total:
          <span data-testid="total-field"> 0 </span>
        </div>
        <div>
          Moeda:
          <span data-testid="header-currency-field"> BRL </span>
        </div>
        <form>
          <label htmlFor="value">
            Valor
            <input type="number" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency" />
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select id="method">
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="food">Alimentação</option>
              <option value="freeTime">Lazer</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
