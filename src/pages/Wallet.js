import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchApi from '../services/APICOINS';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { valor } = this.state;
    return (
      <>
        <header>
          <div>TrybeWallet</div>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">
            {' '}
            { valor }
            {' '}
          </div>
          <div data-testid="header-currency-field"> BRL </div>

        </header>
        <form>
          <label htmlFor="valor">
            valor
            <input type="text" id="valor" name="valor" />
          </label>
          <label htmlFor="descrição">
            descrição
            <input type="text" id="descrição" name="descrição" />
          </label>
          <label htmlFor="moeda">
            moeda
            <select id="moeda">
              <option> oi</option>
            </select>
          </label>
          <label htmlFor="pay">
            Método de pagamento
            <select id="pay">
              <option>Dinheiro </option>
              <option>Cartão de crédito </option>
              <option>Cartão de débito </option>

            </select>
          </label>
        </form>

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;
