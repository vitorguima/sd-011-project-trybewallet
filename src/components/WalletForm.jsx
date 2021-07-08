import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, sendWalletInfo } from '../actions';
import WalletCurrencies from './WalletCurrencies';

class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.inputHandle = this.inputHandle.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    const { fetchCurr } = this.props;
    fetchCurr();
  }

  inputHandle({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleButton() {
    const { sendInfo, rates, fetchCurr } = this.props;
    fetchCurr();
    sendInfo({ ...this.state, exchangeRates: rates });
    this.setState((pState) => ({
      id: pState.id + 1,
    }));
  }

  render() {
    return (
      <form className="walletForm">
        <label htmlFor="value">
          Valor:
          <input
            onChange={ this.inputHandle }
            type="number"
            name="value"
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            onChange={ this.inputHandle }
            type="text"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" onChange={ this.inputHandle } name="currency">
            <WalletCurrencies />
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment" onChange={ this.inputHandle } name="method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" onChange={ this.inputHandle } name="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleButton }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  rates: state.wallet.rates,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurr: () => dispatch(fetchCurrencies()),
  sendInfo: (state) => dispatch(sendWalletInfo(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

WalletForm.propTypes = {
  fetchCurr: PropTypes.func.isRequired,
  rates: PropTypes.objectOf(Object).isRequired,
  sendInfo: PropTypes.func.isRequired,
};
