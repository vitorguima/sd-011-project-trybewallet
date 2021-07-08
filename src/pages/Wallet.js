import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencys: [],
    };
  }

  componentDidMount() {
    this.fetchCurrencys();
  }

  fetchCurrencys() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((resolve) => {
        this.setState((oldState) => ({
          ...oldState,
          currencys: Object.keys(resolve),
        }));
      });
  }

  render() {
    const { getUserEmail } = this.props;
    const { currencys } = this.state;
    return (
      <div>
        <Header props={ getUserEmail } />
        <form>
          <label htmlFor="valor">
            Valor
            <input type="text" name="valor" id="valor" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="descrição" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              { currencys.map((currency, key) => {
                if (currency === 'USDT') return null;
                return (<option key={ key }>{ currency }</option>);
              })}
            </select>
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento
            <select id="paymentMethod">
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

const mapStateToProps = ({ user }) => ({
  getUserEmail: user.email,
});

Wallet.propTypes = {
  getUserEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
