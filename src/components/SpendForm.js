import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense } from '../actions';
import fetchCurrencies from '../services';

class SpendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: { ...props.editExp },
      acronymsCurrency: [],
      expenses: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.inputsTexts = this.inputsTexts.bind(this);
    this.selectInputs = this.selectInputs.bind(this);

    this.setAcronymsCurrency = this.setAcronymsCurrency.bind(this);
    this.addExp = this.addExp.bind(this);
    this.setExpenses = this.setExpenses.bind(this);
  }

  componentDidMount() {
    this.setExpenses();
    this.setAcronymsCurrency();
  }

  async setAcronymsCurrency() {
    const { fetchCurrencie } = this.props;
    await fetchCurrencie();
    const { currencies } = this.props;
    const acronyms = Object.keys(currencies[currencies.length - 1]);
    const acronymsCurrency = acronyms.filter((acron) => acron !== 'USDT');
    this.setState({
      acronymsCurrency,
    });
  }

  setExpenses() {
    const { expenses } = this.props;
    this.setState({
      expenses,
    });
  }

  async addExp(expense) {
    const { addNewExpense, fetchCurrencie, currencies } = this.props;
    const { expenses } = this.state;
    await fetchCurrencie();
    const newExpense = {
      id: (expenses.length),
      ...expense,
      exchangeRates: currencies[currencies.length - 1],
    };
    addNewExpense(newExpense);
    this.setExpenses();
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  inputsTexts() {
    const { expense: { value, description } } = this.state;
    return (
      <fieldset>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
      </fieldset>
    );
  }

  selectInputs() {
    const { expense, acronymsCurrency } = this.state;
    const {
      method,
      tag,
      currency,
    } = expense;
    return (
      <fieldset>
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ this.handleChange } value={ currency }>
            {acronymsCurrency.map((option, index) => (
              <option value={ option } key={ `${option}${index}` }>{ option }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </fieldset>
    );
  }

  render() {
    return (
      <form>
        {this.inputsTexts()}
        {this.selectInputs()}
        <button type="button" onClick={ () => this.addExp(this.state.expense) }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
  editExp: state.wallet.editExp,
});

const mapDispatchToProps = (dispatch) => ({
  addNewExpense: (expense) => dispatch(addExpense(expense)),
  fetchCurrencie: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpendForm);

SpendForm.propTypes = {
  addNewExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCurrencie: PropTypes.func.isRequired,
  editExp: PropTypes.objectOf.isRequired,
};

// {
//   value: 0,
//   description: '',
//   tag: '',
//   currency: '',
//   method: '',
// }
