import React from 'react';
import { Layout } from '../components/common';
import { Header, Select, ExpensesTable } from '../components/Wallet';

import withStore from '../utils/withStore';

import { addNewExpense, updateCurrencies } from '../agents';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { updateCurrencies } = this.props;

    updateCurrencies();
  }

  handleInputChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { addNewExpense } = this.props;

    addNewExpense(this.state);
  }

  renderSelects() {
    const { wallet } = this.props;
    const { currency, method, tag } = this.state;

    const currencyList = Object.keys(wallet.currencies).filter((cur) => cur !== 'USDT');

    return (
      <>
        <Select
          id="expense-currency"
          name="currency"
          value={ currency }
          handleChange={ this.handleInputChange }
          options={ currencyList }
          label="Moeda"
        />

        <Select
          id="expense-method"
          name="method"
          value={ method }
          handleChange={ this.handleInputChange }
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          label="Método de pagamento"
        />

        <Select
          id="expense-tag"
          name="tag"
          value={ tag }
          handleChange={ this.handleInputChange }
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          label="Tag"
        />
      </>
    );
  }

  render() {
    const { value, description } = this.state;

    return (
      <Layout title="Minha Carteira">
        <Header />
        <main>
          <form
            onSubmit={ this.handleSubmit }
          >
            <label htmlFor="expense-value">
              Valor
              <input
                id="expense-value"
                type="number"
                name="value"
                value={ value }
                onChange={ this.handleInputChange }
              />
            </label>

            <label htmlFor="expense-description">
              Descrição
              <input
                id="expense-description"
                type="text"
                name="description"
                value={ description }
                onChange={ this.handleInputChange }
              />
            </label>

            { this.renderSelects() }

            <button type="submit">Adicionar despesa</button>
          </form>

          <ExpensesTable />
        </main>
      </Layout>
    );
  }
}

export default withStore(Wallet, ['wallet'], [addNewExpense, updateCurrencies]);
