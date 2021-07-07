import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <main>
        <header>
          <h1>TrybeWallet</h1>
          <h4 data-testid="email-field">{`Bem vindo: ${email}`}</h4>
          <h4 data-testid="total-field">0</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>

        <section className="form">
          <form>
            <label htmlFor="value">
              Valor
              <input type="text" name="value" />
            </label>
            <label htmlFor="description">
              Descrição
              <input type="text" name="description" />
            </label>
            <label htmlFor="coin">
              Moeda
              <select name="coin">
                <option></option>
              </select>
            </label>
            <label htmlFor="payment-method">
              Método de pagamento
              <select name="payment-method">
                <option value="money">Dinheiro</option>
                <option value="credit-card">Cartão de crédito</option>
                <option value="credit-card">Cartão de débito</option>
              </select>
            </label>
            <label htmlFor="tag">
              Tag
              <select name="tag">
                <option value="food">Alimentação</option>
                <option value="leisure">Lazer</option>
                <option value="work">Trabalho</option>
                <option value="transport">Transporte</option>
                <option value="health">Saúde</option>
              </select>
            </label>
          </form>
        </section>
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
