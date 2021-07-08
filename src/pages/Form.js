import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { currencies, expensesValidation } = this.props;
    const handleInput = ({ target }) => {
      const { value, name } = target;
      this.setState({ [name]: value });
    };
    const Moedas = (currencies.map((coins) => Object.values(coins)
      .map((siglas) => siglas).filter((item) => item.codein !== 'BRLT')
      .map((element) => <option key={ element.code }>{element.code}</option>)));
    return (
      <form>
        <label htmlFor="Valor">
          Valor:
          <input id="Valor" type="text" name="value" onChange={ handleInput } />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <input id="Descrição" type="text" name="description" onChange={ handleInput } />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select id="Moeda" name="currency" onChange={ handleInput }>
            {Moedas}
          </select>
        </label>
        <label htmlFor="Método de pagamento">
          Método de pagamento:
          <select
            id="Método de pagamento"
            type="text"
            name="method"
            onChange={ handleInput }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag:
          <select id="Tag" type="text" name="tag" onChange={ handleInput }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => {
            expensesValidation({ ...this.state, exchangeRates: currencies[0] });
            this.setState((prevState) => ({ id: prevState.id + 1 }));
          } }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  expensesValidation: (expenses) => dispatch(actions.expensesValidation(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  currencies: PropTypes.arrayOf(Object).isRequired,
  expensesValidation: PropTypes.func.isRequired,
};
