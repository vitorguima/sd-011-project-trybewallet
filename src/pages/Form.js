import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, newExpenseAction } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  async handleClick() {
    const { addExpense, getCurrencies, currencies, expenses } = this.props;
    const formElement = document.forms['newExpense-form'];
    await getCurrencies();
    addExpense({
      id: expenses.length,
      value: formElement.elements.totalValue.value,
      description: formElement.elements.description.value,
      currency: formElement.elements.currency.value,
      method: formElement.elements.method.value,
      tag: formElement.elements.tag.value,
      exchangeRates: currencies,
    });
    formElement.reset();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <div />
        <form id="newExpense-form">
          <label htmlFor="totalValue">
            Valor
            <input type="number" id="totalValue" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" autoComplete="off" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              {Object.keys(currencies).map((curr, index) => (curr !== 'USDT' ? (
                <option key={ index } id={ curr }>{curr}</option>) : null))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select id="method">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Saúde">Saúde</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
    currencies: state.wallet.currencies,
    expenses: state.wallet.expenses,
    editMenu: state.wallet.editMenu,
  };
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  addExpense: (details) => dispatch(newExpenseAction(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  currencies: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.objectOf(PropTypes.any),
  ]),
  expenses: PropTypes.arrayOf(PropTypes.any),
};

Form.defaultProps = {
  currencies: [],
  expenses: [],
};
