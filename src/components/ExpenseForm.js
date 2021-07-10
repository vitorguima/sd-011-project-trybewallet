import React from 'react';

class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      currencies: {},
    };
  }

  componentDidMount() {
    this.currenciesAPI();
  }

  currenciesAPI() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json())
      .then((json) => (
        this.setState({ currencies: json })
      ));
  }

  render() {
    const { currencies } = this.state;
    const currenciesTitle = Object.keys(currencies);

    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" id="valor" />
          </label>

          <label htmlFor="description">
            Descrição
            <input type="text" id="description" />
          </label>

          <label htmlFor="currency">
            Moeda
            <select id="currency">
              {currenciesTitle.filter((currency) => currency !== 'USDT')
                .map((cr, index) => <option key={ index }>{cr}</option>)}
            </select>
          </label>

          <label htmlFor="payment">
            Método de pagamento
            <select id="payment">
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

export default ExpenseForm;
