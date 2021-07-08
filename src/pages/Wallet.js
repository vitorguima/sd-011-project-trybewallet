import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoins } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { mostraMoeda } = this.props;
    mostraMoeda();
  }

  render() {
    const { email, currencies } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{email}</span>
          <span data-testid="total-field">Despesa total: 0</span>
          <span data-testid="header-currency-field">Câmbio: BRL</span>
        </header>
        <form>
          <label htmlFor="valor">
            valor
            <input type="number" name="valor" id="valor" />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea name="description" id="description" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select name="moeda" id="moeda">
              {currencies.filter((currencie) => currencie !== 'USDT')
                .map((currencie) => <option key={ currencie }>{currencie}</option>)}
            </select>
          </label>
          <label htmlFor="método de pagamento">
            Método de pagamento
            <select name="método de pagamento" id="método de pagamento">
              <option name="dinheiro">Dinheiro</option>
              <option name="cartão de crédito">Cartão de crédito</option>
              <option name="cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option name="alimentação">Alimentação</option>
              <option name="lazer">Lazer</option>
              <option name="trabalho">Trabalho</option>
              <option name="transporte">Transporte</option>
              <option name="saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  mostraMoeda: () => dispatch(fetchCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  mostraMoeda: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
