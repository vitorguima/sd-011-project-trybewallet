import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoins, addExpense } from '../actions';

class TrybewalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'money',
      tag: 'food',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, fetchCoinsAction } = this.props;
    dispatch(fetchCoinsAction());
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { addExpenseAction, dispatch, fetchCoinsAction, exchangeRates } = this.props;
    await dispatch(fetchCoinsAction());
    const { value, description, currency, method, tag } = this.state;
    addExpenseAction({ value, description, currency, method, tag, exchangeRates });
  }

  render() {
    const { exchangeRates } = this.props;
    return (
      <form className="trybewallet-form">
        <label htmlFor="value">
          Valor
          <input type="number" name="value" id="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency" onChange={ this.handleChange }>
            { Object.values(exchangeRates).map(({ code }) => (
              <option key={ code } value={ code }>{ code }</option>
            )) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  exchangeRates: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  fetchCoinsAction: fetchCoins,
  addExpenseAction: (expense) => dispatch(addExpense(expense)),
});

TrybewalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetchCoinsAction: PropTypes.func.isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.any),
  addExpenseAction: PropTypes.func.isRequired,
};

TrybewalletForm.defaultProps = {
  exchangeRates: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(TrybewalletForm);
