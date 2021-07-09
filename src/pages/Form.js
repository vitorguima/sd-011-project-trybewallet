import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import Inputs from './components/Inputs';

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
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies, expensesValidation } = this.props;

    const moedas = (currencies.map((coins) => Object.values(coins)
      .map((siglas) => siglas).filter((item) => item.codein !== 'BRLT')
      .map((element) => <option key={ element.code }>{element.code}</option>)));
    return (
      <form>
        <Inputs moedas={ moedas } handleInput={ this.handleInput } />
        <label htmlFor="Método de pagamento">
          Método de pagamento:
          <select
            id="Método de pagamento"
            type="text"
            name="method"
            onChange={ this.handleInput }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag:
          <select id="Tag" type="text" name="tag" onChange={ this.handleInput }>
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
