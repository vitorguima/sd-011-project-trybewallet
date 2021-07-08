import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editingExpense, fetchCurrencies, sendWalletInfo } from '../actions';
import WalletCurrencies from './WalletCurrencies';
import PaymentOptions from './PaymentOptions';
import TagOptions from './TagOptions';

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

  buttonFunction() {
    const { editingBool, editingDispatch } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const newObj = {
      value,
      description,
      currency,
      method,
      tag,
    };
    if (!editingBool) {
      return (
        <button
          type="button"
          onClick={ this.handleButton }
        >
          Adicionar despesa
        </button>
      );
    } if (editingBool) {
      return (
        <button
          type="button"
          onClick={ () => editingDispatch(newObj) }
        >
          Editar despesa
        </button>
      );
    }
    // Na bônus o meu amigo Jean Esteves me ajudou no esclarecimento da lógica e do funcionamento do requisito.
  }

  selectsFunction() {
    return (
      <div>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            onChange={ this.inputHandle }
            name="currency"
            data-testid="currency-input"
          >
            <WalletCurrencies />
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select
            id="payment"
            onChange={ this.inputHandle }
            name="method"
            data-testid="method-input"
          >
            <PaymentOptions />
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            onChange={ this.inputHandle }
            name="tag"
            data-testid="tag-input"
          >
            <TagOptions />
          </select>
        </label>
      </div>);
  }

  render() {
    return (
      <form className="walletForm">
        <label htmlFor="value">
          Valor:
          <input
            data-testid="value-input"
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
            data-testid="description-input"
          />
        </label>
        {this.selectsFunction()}
        {this.buttonFunction()}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  rates: state.wallet.rates,
  editingBool: state.wallet.editing,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurr: () => dispatch(fetchCurrencies()),
  sendInfo: (state) => dispatch(sendWalletInfo(state)),
  editingDispatch: (state) => dispatch(editingExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

WalletForm.propTypes = {
  editingBool: PropTypes.bool.isRequired,
  editingDispatch: PropTypes.func.isRequired,
  fetchCurr: PropTypes.func.isRequired,
  rates: PropTypes.objectOf().isRequired,
  sendInfo: PropTypes.func.isRequired,
};
