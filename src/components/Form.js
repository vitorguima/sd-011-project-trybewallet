import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import requestCurrencyAction from '../actions/requestCurrencysAction';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleForm = this.handleForm.bind(this);
  }

  componentDidMount() {
    const { requestCurrencys } = this.props;
    requestCurrencys();
  }

  handleForm({ target: { id, value } }) {
    this.setState((oldState) => ({
      ...oldState,
      [id]: value,
    }));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currenciesOptions } = this.props;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" type="number" value={ value } onChange={ this.handleForm } />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            value={ description }
            onChange={ this.handleForm }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" value={ currency } onChange={ this.handleForm }>
            { currenciesOptions.map((currencyAPI, key) => (
              <option key={ key }>{ currencyAPI }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" value={ method } onChange={ this.handleForm }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" value={ tag } onChange={ this.handleForm }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesOptions: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  requestCurrencys: () => dispatch(requestCurrencyAction()),
});

Form.propTypes = {
  requestCurrencys: PropTypes.func.isRequired,
  currenciesOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
