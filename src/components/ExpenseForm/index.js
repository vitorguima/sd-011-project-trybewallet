import React from 'react';
import LabelledInput from '../LabelledInput';
import LabelledSelect from '../LabelledSelect';

const paymentOptions = [
  { label: 'Dinheiro', value: 'cash' },
  { label: 'Cartão de crédito', value: 'credit' },
  { label: 'Cartão de débito', value: 'debit' },
];

const tagOptions = [
  { label: 'Alimentação', value: 'food' },
  { label: 'Lazer', value: 'leisure' },
  { label: 'Trabalho', value: 'work' },
  { label: 'Transporte', value: 'transportation' },
  { label: 'Saúde', value: 'health' },
];

const baseURL = 'https://economia.awesomeapi.com.br/json/all';

const currencyCodes = [
  'USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC',
  'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP',
];

export default class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: '',
      payment: paymentOptions[0].value,
      tag: tagOptions[0].value,
      currencyOptions: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  handleChange({ name, value }) {
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  }

  async fetchCurrencies() {
    const response = await fetch(baseURL);
    const data = await response.json();
    const currencies = Object.entries(data);

    const filteredCurrencies = currencies.reduce(
      (filtered, [key, value]) => {
        if (currencyCodes.includes(key)) {
          filtered.push({
            label: value.code,
            value: value.code,
          });
        }

        return filtered;
      },
      [],
    );

    this.setState({
      currency: filteredCurrencies[0].value,
      currencyOptions: filteredCurrencies,
    });
  }

  render() {
    const { value, description, currency, payment, tag, currencyOptions } = this.state;

    return (
      <form>
        <LabelledInput
          id="value"
          label="Valor"
          type="number"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <LabelledInput
          id="description"
          label="Descrição"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <LabelledSelect
          id="currency"
          label="Moeda"
          name="currency"
          options={ currencyOptions }
          value={ currency }
          onChange={ this.handleChange }
        />
        <LabelledSelect
          id="payment"
          label="Método de pagamento"
          name="payment"
          options={ paymentOptions }
          value={ payment }
          onChange={ this.handleChange }
        />
        <LabelledSelect
          id="tag"
          label="Tag"
          name="tag"
          options={ tagOptions }
          value={ tag }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}
