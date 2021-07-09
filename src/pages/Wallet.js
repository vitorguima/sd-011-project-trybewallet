import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiThunk, saveExpense } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const { requestApi } = this.props;
    await requestApi();
  }

  handleChange(event) {
    const { target } = event;
    console.log(target.name);
    console.log(target.value);
    this.setState({ [target.name]: target.value });
  }

  createInput(name, label, stateKey) {
    return (
      <label htmlFor={ name }>
        { label }
        <input
          id={ name }
          type="text"
          name={ name }
          onChange={ this.handleChange }
          value={ stateKey }
        />
      </label>
    );
  }

  createSelect(name, label, arraySelect, stateKey) {
    return (
      <label htmlFor={ name }>
        { label }
        <select
          id={ name }
          name={ name }
          onChange={ this.handleChange }
          value={ stateKey }
        >
          { arraySelect.map((item) => (
            <option key={ name } value={ item }>{ item }</option>
          ))}
        </select>
      </label>
    );
  }

  renderHeader() {
    const { userEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ userEmail }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }

  render() {
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const expenses = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { value, description, currency, method, tag } = this.state;
    const { currencies, loadingCurrencies, addToExpenses } = this.props;
    delete currencies.USDT;
    const currenciesArray = Object.keys(currencies).map((item) => item);

    return (
      <div>
        { this.renderHeader() }
        <h3>TrybeWallet</h3>
        { loadingCurrencies ? <p>Carregando...</p> : (
          <form>
            { this.createInput('value', 'Valor', value) }
            { this.createInput('description', 'Descrição', description) }
            { this.createSelect('currency', 'Moeda', currenciesArray, currency) }
            { this.createSelect('method', 'Método de pagamento', payments, method) }
            { this.createSelect('tag', 'Tag', expenses, tag) }
            <button
              type="button"
              onClick={ () => addToExpenses({
                value,
                description,
                currency,
                method,
                tag,
              }) }
            >
              Adicionar despesa
            </button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
  loadingCurrencies: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  requestApi: () => dispatch(fetchApiThunk()),
  addToExpenses: (payload) => dispatch(saveExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = ({
  userEmail: PropTypes.string,
  currencies: PropTypes.shape({ Object }),
  loadingCurrencies: PropTypes.bool,
}).isRequired;
