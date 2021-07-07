import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currencies: [],
  //   };
  // }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  render() {
    const { userEmail, allCurrencies } = this.props;
    const currencies = Object.keys(allCurrencies).filter((currency) => currency !== 'USDT'
     && currency !== 'DOGE');
    return (
      <div>
        <header>
          <strong data-testid="email-field">{userEmail}</strong>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="text" name="value" id="value" value="0" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" name="description" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency" name="currency" value="BRL">
              { currencies.map((currency,
                index) => <option key={ index } value={ currency }>{currency}</option>)}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select id="payment" name="payment" value="dinheiro">
              <option value="dinheiro">Dinheiro</option>
              <option value="crédito">Cartão de crédito</option>
              <option value="débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select name="tag" id="tag">
              <option value="alimentação">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const MapStateToProps = (state) => ({
  userEmail: state.user.email,
  allCurrencies: state.wallet.currencies,
});

const MapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

export default connect(MapStateToProps, MapDispatchToProps)(Wallet);
