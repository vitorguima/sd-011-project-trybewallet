import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal() {
    const { walletExpenses } = this.props;
    console.log(walletExpenses);
    const total = walletExpenses.reduce((acc, curr) => acc + curr, 0);
    if (!total) return 0;
    return total;
  }

  renderForm() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" />
        </label>

        <label htmlFor="description">
          Descrição
          <input type="text" />
        </label>

        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            <option value="br">BR</option>
          </select>
        </label>

        <label htmlFor="payment-method">
          Método de Pagamento
          <select name="payment-method" id="payment-method">
            <option value="cash">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense-tag">
          Tag
          <select name="expense-tag" id="expense-tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    const { userEmail } = this.props;
    const total = this.calculateTotal();
    return (
      <div>
        {this.renderForm()}
        <header>
          <div data-testid="email-field">
            Email:
            {' '}
            {userEmail}
          </div>
          <section data-testid="total-field">
            Total:
            {' '}
            {total}
          </section>
          <section data-testid="header-currency-field">
            Moeda atual:BRL
          </section>
        </header>
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  walletExpenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  walletExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
