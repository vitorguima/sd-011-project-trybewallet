import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import updateCurrency from '../reducers/wallet';

class Wallet extends React.Component {
  render() {
    const { email, crncys } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">0</p>
          <select data-testid="header-currency-field">
            <option>BRL</option>
          </select>
        </header>
        {/* Formulário */}
        <form>
          <label htmlFor="expenseInput">
            Valor
            <input type="number" name="expense" id="expenseInput" />
          </label>

          <label htmlFor="expenseDescription">
            Descrição
            <textarea id="expenseDescription" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              { crncys.map((crncy, index) => <option key={ index }>{crncy}</option>) }
            </select>
          </label>
          <label htmlFor="payment-method">
            Método de pagamento
            <select id="payment-method">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
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
Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  crncys: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.updateEmail.email,
  crncys: state.updateCurrency.currency,
});

export default connect(mapStateToProps)(Wallet);
