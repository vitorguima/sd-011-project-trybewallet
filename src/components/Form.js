import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expenseAction, fetchCurrencies } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
    };
    this.fetchApi = this.fetchApi.bind(this);
    this.changeValues = this.changeValues.bind(this);
    this.createExpense = this.createExpense.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  changeValues({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  createExpense() {
    const { value, description, currency, method, tag, id } = this.state;
    this.fetchApi();
    const { setExpense, currencies } = this.props;
    const expense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    };
    setExpense(expense);
    console.log(method);
    this.setState((prev) => ({
      id: prev.id + 1,
      currencies: [],
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  }

  fetchApi() {
    const { fetchCurrenciesApi } = this.props;
    this.setState(
      async () => {
        await fetchCurrenciesApi();
        const { currencies } = this.props;
        this.setState({
          currencies,
        });
      },
    );
  }

  render() {
    const { currencies, method, tag, description, currency, value } = this.state;
    const FIFTEEN = 20;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="number" name="value" id="value" value={ value } onChange={ this.changeValues } />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" name="description" id="description" value={ description } onChange={ this.changeValues } />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select name="currency" id="currency" value={ currency } onChange={ this.changeValues }>
              { Object.values(currencies).splice(1, FIFTEEN).map((code, index) => (
                <option key={ index }>{code.code}</option>
              )) }
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select name="method" id="method" value={ method } onChange={ this.changeValues }>
              <option>Dinheiro</option>
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select name="tag" id="tag" value={ tag } onChange={ this.changeValues }>
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.createExpense }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesApi: () => dispatch(fetchCurrencies()),
  setExpense: (state) => dispatch(expenseAction(state)),
});

Form.propTypes = {
  fetchCurrenciesApi: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(Object).isRequired,
  setExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
