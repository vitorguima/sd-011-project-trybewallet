import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ 0 }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>

        <form>
          <label htmlFor="expenses-input">
            Valor:
            <input id="expenses-input" />
          </label>

          <label htmlFor="expenses-description">
            Descrição:
            <textarea id="expenses-description" />
          </label>

          <label htmlFor="currency-input">
            Moeda:
            <select id="currency-input"> </select>
          </label>

          <label htmlFor="payment-method-input">
            Método de pagamento:
            <select id="payment-method-input">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tags-input">
            tag:
            <select id="tags-input">
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

// Função responsável por mapear a store, e colocar dentro da prop email.
// Neste caso quero o email de meu reducer user.
const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
