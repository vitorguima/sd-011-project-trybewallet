import React from 'react';
// import store from '../store';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      // expensesValue: 0,
      // descrition: '',
      // payment: '',
      // tag: '',
      // exchangeRates: {},
      // currency: 'USD',
      currencies: [],
    };
    // this.inputExpenses = this.inputExpenses.bind(this);
    // this.inputCurrency = this.inputCurrency.bind(this);
    // this.inputMethodyPayment = this.inputMethodyPayment.bind(this);
    // this.inputCategory = this.inputCategory.bind(this);
    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  async fetchAPI() {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await request.json();
    return data;
  }

  async fetchCurrency() {
    const data = await this.fetchAPI();
    const objKeys = Object.keys(data);
    const currencies = objKeys.filter((currency) => currency !== 'USDT');
    this.setState({
      // exchangeRates: data,
      currencies,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  inputExpenses() {
    return (
      <section>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            name="expensesValue"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descrition">
          Descrição:
          <input
            type="text"
            name="descrition"
            onChange={ this.handleChange }
          />
        </label>
      </section>
    );
  }

  inputCurrency() {
    const { currencies } = this.state;
    return (
      <section>
        <label htmlFor="currencies">
          Moedas:
          <select name="currency" onChange={ this.handleChange }>
            {currencies.map((currency, index) => (
              <option
                key={ index }
                value={ currency }
                data-testid={ currency }

              >
                {currency}
              </option>
            ))}
          </select>
        </label>
      </section>
    );
  }

  inputMethodyPayment() {
    return (
      <section>
        <label htmlFor="payment">
          Método de pagamento:
          <select name="payment" onChange={ this.handleChange }>
            <option value="dinheiro">
              Dinheiro
            </option>
            <option value="cartao-de-credito">
              Cartão de crédito
            </option>
            <option value="cartao-de-debito">
              Cartão de débito
            </option>
          </select>
        </label>
      </section>
    );
  }

  inputCategory() {
    return (
      <section>
        <label htmlFor="category">
          Selecione uma categoria:
          <select name="tag" onChange={ this.handleChange }>
            <option value="alimentacao">
              Alimentação
            </option>
            <option value="lazer">
              Lazer
            </option>
            <option value="trabalho">
              Trabalho
            </option>
            <option value="transporte">
              Transporte
            </option>
            <option value="saude">
              Saúde
            </option>
          </select>
        </label>
      </section>
    );
  }

  render() {
    return (
      <form action="POST">
        {this.inputExpenses()}
        {this.inputCurrency()}
        {this.inputMethodyPayment()}
        {this.inputCategory()}
      </form>

    );
  }
}

export default Form;
