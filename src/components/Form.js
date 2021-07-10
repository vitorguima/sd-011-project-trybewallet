import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, addExpenses } from '../actions';
// import expenses from '../reducers/wallet';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.btnCurrency = this.btnCurrency.bind(this);
  }

  componentDidMount() {
    const { currencySave } = this.props;
    currencySave();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  btnCurrency() {
    const { currencies, esxDispatch, currencySave } = this.props;
    currencySave();
    const newExpense = {
      ...this.state,
      exchangeRates: currencies,
    };
    esxDispatch(newExpense);
    this.setState((oldState) => ({ id: oldState.id + 1 }));
  }

  render() {
    const { currencies } = this.props;
    // console.log(currencies)
    const keysApi = Object.keys(currencies).filter((currency) => currency !== 'USDT');
    // console.log(keysApi);

    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input name="value" id="valor" onChange={ this.handleChange } />
        </label>

        <label htmlFor="descrição">
          Descrição:
          <input name="description" id="descrição" onChange={ this.handleChange } />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select name="currency" id="moeda" onChange={ this.handleChange }>
            {keysApi.map((key) => <option key={ key }>{ key }</option>)}
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento:
          <select name="method" id="pagamento" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tipo-despesa">
          Tag:
          <select name="tag" id="tipo-despesa" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button type="button" onClick={ this.btnCurrency }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currencySave: () => dispatch(fetchCurrency()),
  esxDispatch: (expenses) => dispatch(addExpenses(expenses)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Form.propTypes = {
  currencySave: func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
