import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  // constructor(props) {
  //   super(props);

  //   const { currencies } = this.props;

  //   this.state = {
  //   };
  // }

  componentDidMount() {
    const { fetchMoedas } = this.props;
    fetchMoedas();
  }

  render() {
    const { email, currencies } = this.props;
    const moedas = currencies.filter((item) => item !== 'USDT');
    return (
      <div>
        <header>
          <p data-testid="email-field">{`Email: ${email}`}</p>
          <p data-testid="total-field">{`Gastos: ${0}`}</p>
          <p data-testid="header-currency-field">Moeda: BRL</p>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="text" id="valor" name="valor" />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input type="text" id="descrição" name="descrição" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda" name="moeda">
              {moedas.map((moeda) => (
                <option key={ moeda } value={ moeda }>{moeda}</option>
              ))}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select name="payment" id="payment">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartão de crédito">Cartão de crédito</option>
              <option value="cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
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
  fetchMoedas: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;
