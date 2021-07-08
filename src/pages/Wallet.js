import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <h2 data-testid="email-field">{ email }</h2>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <h1>Adicone nova despesa</h1>
          <label htmlFor="value">
            Valor:
            <input type="number" name="value" id="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" name="description" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select type="text" name="currency" id="currency">
              <option>brl</option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select type="text" name="payment" id="payment">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select type="text" name="tag" id="tag">
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
});
const mapDispatchToProps = (dispatch) => ({
  oi: dispatch,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
