import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatchCurrencies } = this.props;
    dispatchCurrencies();
  }

  header() {
    const { getEmail } = this.props;
    return (
      <header>
        <h5 data-testid="email-field">{getEmail}</h5>
        <p data-testid="total-field">0</p>
        <select data-testid="header-currency-field">
          <option>BRL</option>
        </select>
      </header>
    );
  }

  render() {
    const { stateCurrencies, stateIsLoading } = this.props;

    if (stateIsLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        {this.header()}
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea name="description" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency">
              {stateCurrencies.map((e, i) => <option key={ i }>{e.code}</option>)}
            </select>
          </label>
          <label htmlFor="payMethod">
            Método de pagamento
            <select id="payMethod">
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
  getEmail: state.user.email,
  stateCurrencies: state.wallet.currencies,
  stateIsLoading: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  stateCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  stateIsLoading: PropTypes.bool.isRequired,
  dispatchCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
