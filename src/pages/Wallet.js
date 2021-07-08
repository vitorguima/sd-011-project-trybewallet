import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { value } = this.state;
    return (
      <div>
        <header>
          <div>TrybeWallet</div>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">{ value }</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <form>
          <label htmlFor="name">
            Nome:
            <input type="text" name="name" />
          </label>
          <label htmlFor="valor">
            valor
            <input id="valor" type="text" name="valor" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input id="descrição" type="text" name="descrição" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda"> </select>
          </label>
          <label htmlFor="método de pagamento">
            Método de pagamento:
            <select id="método de pagamento" name="método de pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartão-de-credito">Cartão de crédito</option>
              <option value="cartão-de-debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
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

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequires;
