import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mountExpenses, fetchMoedas, getExpenseForm, updateForm } from '../actions';

let saveChange = false;
const alimentacao = 'Alimentação';

class FormDespesa extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
      id: 0,
    };
    this.handleInput = this.handleInput.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.saveFormChange = this.saveFormChange.bind(this);
  }

  componentDidMount() {
    const { dispatchFetchMoedas, sendFormDispatch } = this.props;
    dispatchFetchMoedas();
    sendFormDispatch(this.sendForm);
  }

  sendForm(id) {
    const { expenses } = this.props;
    const findId = expenses.find((exp) => exp.id === id);
    this.setState({
      value: findId.value,
      description: findId.description,
      currency: findId.currency,
      method: findId.method,
      tag: findId.tag,
      id: findId.id,
      exchangeRates: findId.exchangeRates,
    });
    saveChange = true;
  }

  saveFormChange() {
    const { saveFormChangeDispatch } = this.props;
    console.log(saveFormChangeDispatch);
    saveFormChangeDispatch(this.state);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
      id: 0,
    });
    saveChange = false;
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderForm1() {
    const { value, description, currency } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            data-testid="value-input"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            data-testid="currency-input"
            id="currency"
            onChange={ this.handleInput }
            value={ currency }
          >
            {currencies.map((res, i) => <option key={ i } value={ res }>{res}</option>)}
          </select>
        </label>
      </form>
    );
  }

  renderForm2() {
    const { method, tag } = this.state;
    return (
      <form>
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            data-testid="method-input"
            id="method"
            value={ method }
            onChange={ this.handleInput }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            id="tag"
            value={ tag }
            onChange={ this.handleInput }
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    const { MountExpenses, exchange, dispatchFetchMoedas } = this.props;
    return (
      <div>
        {this.renderForm1()}
        {this.renderForm2()}
        {saveChange ? (
          <button
            type="button"
            onClick={ this.saveFormChange }
          >
            Editar despesa
          </button>)
          : (
            <button
              type="button"
              onClick={ () => {
                dispatchFetchMoedas();
                MountExpenses({ ...this.state, exchangeRates: exchange });
                this.setState((prevState) => ({
                  value: '',
                  description: '',
                  currency: 'USD',
                  method: 'Dinheiro',
                  tag: 'Alimentação',
                  id: prevState.id + 1,
                }));
              } }
            >
              Adicionar despesa
            </button>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  exchange: state.wallet.exchange,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  MountExpenses: (state) => dispatch(mountExpenses(state)),
  dispatchFetchMoedas: (state) => dispatch(fetchMoedas(state)),
  sendFormDispatch: (state) => dispatch(getExpenseForm(state)),
  saveFormChangeDispatch: (state) => dispatch(updateForm(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDespesa);

FormDespesa.propTypes = {
  MountExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf.isRequired,
  dispatchFetchMoedas: PropTypes.func.isRequired,
  exchange: PropTypes.objectOf.isRequired,
  expenses: PropTypes.shape({
    find: PropTypes.func.isRequired,
  }).isRequired,
  saveFormChangeDispatch: PropTypes.func.isRequired,
  sendFormDispatch: PropTypes.func.isRequired,
};
