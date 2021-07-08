/* eslint-disable max-lines-per-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div
        className="main-page"
      >
        <section>
          <div className="title">TrybeWallet</div>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </section>
        <form>
          <label htmlFor="expenses">
            Valor
            <input id="expenses" type="number" />
          </label>
          {/*  */}
          <label htmlFor="description">
            Descrição
            <input id="description" />
          </label>
          {/*  */}
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              <option>a</option>
            </select>
          </label>
          {/*  */}
          <label htmlFor="payment-method">
            Método de pagamento
            <select id="payment-method">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          {/*  */}
          <label htmlFor="category">
            Tag
            <select id="category">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          {/*  */}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
