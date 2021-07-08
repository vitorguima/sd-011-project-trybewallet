import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderWallet from './HeaderWallet';
import { fetchApi } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestCurrencies } = this.props;
    requestCurrencies();
  }

  render() {
    const { email, currencies } = this.props;
    return (
      <div>
        <HeaderWallet email={ email } />
        <form>
          <label htmlFor="valor">
            Valor
            <input id="valor" name="valor" type="text" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input id="descricao" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              { currencies.map((currency, index) => (
                <option
                  key={ index }
                >
                  { currency }
                </option>)) }
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento">
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

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  requestCurrencies: () => dispatch(fetchApi()),
});

Wallet.propTypes = {
  requestCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
