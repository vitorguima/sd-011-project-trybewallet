import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { expenses, email } = this.props;
    const total = expenses.reduce((acc, current) => acc + current, 0);
    return (
      <div>
        <header>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">{total}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="number" id="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <textarea id="description" />
          </label>
          <label htmlFor="currency">
            Moeda:
            {/* <select id="currency">
            será preenchido pela consulta à API
          </select> */}
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select id="payment">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  expenses: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
