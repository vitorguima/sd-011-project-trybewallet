import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyQuote } from '../actions/fetchCurrencyQuote';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      currencys: [],
      form: {
        id: 0,
        value: 0,
        description: '',
        currency: '',
        method: '',
        tag: '',
        exchangeRates: {},
      },
    };
    this.handleForm = this.handleForm.bind(this);
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

  handleForm({ target: { id, value } }) {
    this.setState((oldState) => ({
      ...oldState,
      form: {
        ...oldState.form,
        [id]: value,
      },
    }));
  }

  render() {
    const { currencys, form } = this.state;
    const { sendForm } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" onChange={ this.handleForm } />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" onChange={ this.handleForm } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ this.handleForm }>
            { currencys.map((currency, key) => {
              if (currency === 'USDT') return null;
              return (<option key={ key }>{ currency }</option>);
            })}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" onChange={ this.handleForm }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ this.handleForm }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ () => sendForm(form) }>Enviar</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendForm: (form) => dispatch(fetchCurrencyQuote(form)),
});

ExpenseForm.propTypes = {
  sendForm: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ExpenseForm);
