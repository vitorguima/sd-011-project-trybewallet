import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getDataAPI from '../services/fetchAPI';
import { walletAction } from '../actions';

class Wallet extends Component {
  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const { dataMoedas } = this.props;
    const apiMoedas = await getDataAPI();
    const data = Object.keys(apiMoedas).filter((moeda) => moeda !== 'USDT');
    dataMoedas(data);
  }

  header() {
    const { emailState } = this.props;
    return (
      <header>
        <div>Hello, TrybeWallet!</div>
        <h2 data-testid="email-field">{ emailState }</h2>
        <div>
          Despesa Total: R$
          <span data-testid="total-field"> 0 </span>
          <span data-testid="header-currency-field"> BRL </span>
        </div>
      </header>
    );
  }

  render() {
    const { arrayCurrencies } = this.props;
    return (
      <div>
        { this.header() }
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              { arrayCurrencies.map((res, index) => (
                <option key={ index }>{res}</option>)) }
            </select>
          </label>
          <label htmlFor="payment-mode">
            Método de pagamento
            <select id="payment-mode">
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
const mapDispathToProps = (dispatch) => ({
  dataMoedas: (arrayMoedas) => dispatch(walletAction(arrayMoedas)),
});

const mapStateToProps = (state) => ({
  emailState: state.user.email,
  arrayCurrencies: state.wallet.currencies,
});

Wallet.propTypes = {
  emailState: PropTypes.string.isRequired,
  arrayCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataMoedas: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispathToProps)(Wallet);
