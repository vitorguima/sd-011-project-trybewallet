import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  calcTotal() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, current) => {
      const { value, currency, exchangeRates } = current;
      const convertedValue = parseFloat(exchangeRates[currency].ask);
      return acc + parseFloat(value) * convertedValue;
    }, 0);
    return total;
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick() {
    const { addExpense } = this.props;
    addExpense(this.state);
  }

  renderForm() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            name="value"
            id="value"
            onChange={ this.handleOnChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            id="description"
            name="description"
            onChange={ this.handleOnChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            onChange={ this.handleOnChange }
          >
            {
              Object.keys(currencies)
                .filter((item) => item !== 'USDT')
                .map((item, index) => {
                  return (
                    <option key={ index } value={item}>
                      {item}
                    </option>
                  )
                })
            }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            name="method"
            onChange={ this.handleOnChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        {this.renderTag()}
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>);
  }

  renderTag() {
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          name="tag"
          onChange={ this.handleOnChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  renderHeader() {
    const { email } = this.props;
    const total = this.calcTotal();
    return (
      <header>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{total}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }

  renderTable() {
    const { expenses } = this.props;
    const tableHeader = (
      <tr>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </tr>
    )
    const tableBody = expenses.map((expense, index) => {
        const {
          description,
          tag,
          method,
          value,
          currency,
          exchangeRates
        } = expense;
        const valueNumber = parseFloat(value);
        const currencyData = exchangeRates[currency]
        const currencyName = currencyData.name;
        const conversionRate = parseFloat(currencyData.ask);
        const brazilianValue = valueNumber * conversionRate;
        return (
          <tr key={ index }>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{valueNumber.toFixed(2)}</td>
            <td>{currencyName}</td>
            <td>{conversionRate.toFixed(2)}</td>
            <td>{brazilianValue.toFixed(2)}</td>
            <td>Real</td>
            <td>
              <button data-testid="edit-btn" type="button">Delete</button>
              <button data-testid="delete-btn" type="button">Update</button>
            </td>
          </tr>
        );
      })
     return (
         <table>
           <thead>
            {tableHeader}
           </thead>
           <tbody>
            {tableBody}
           </tbody>
         </table>
     );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderForm()}
        {this.renderTable()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(actions.fetchAPI()),
  addExpense: (data) => dispatch(actions.addExpense(data)),
});

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  fetchAPI: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
