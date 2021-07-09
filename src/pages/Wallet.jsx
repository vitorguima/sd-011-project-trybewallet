import React from 'react';
import { Layout } from '../components/common';
import { Header, Select } from '../components/Login';

import withStore from '../utils/withStore';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      description: '',
      currency: '',
      paymentMethod: '',
      tag: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  renderSelects() {
    const { currency, paymentMethod, tag } = this.state;

    return (
      <>
        <Select
          id="expense-currency"
          name="currency"
          value={ currency }
          handleChange={ this.handleInputChange }
          options={ [] }
          label="Moeda"
        />

        <Select
          id="expense-paymentMethod"
          name="paymentMethod"
          value={ paymentMethod }
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
    const { amount, description } = this.state;

    return (
      <Layout title="Minha Carteira">
        <Header />
        <main>
          <form
            onSubmit={ (e) => e.preventDefault() }
          >
            <label htmlFor="expense-amount">
              Valor
              <input
                id="expense-amount"
                type="number"
                name="amount"
                value={ amount }
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
          </form>
        </main>
      </Layout>
    );
  }
}

export default withStore(Wallet, ['user']);
