import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchCurrency, AddExpenses } from '../actions';
import PaymentMethod from './PaymentMethod';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { fetchCurrencies, myExpenses, getCurrencies, id } = this.props;
    delete fetchCurrencies.USDT;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" id="value" onChange={ this.handleChange } />
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
              {Object.values(fetchCurrencies)
                .map((currency, index) => <option key={ index }>{currency.code}</option>)}
            </select>
          </label>
          <PaymentMethod handleChange={ this.handleChange } />
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag" onChange={ this.handleChange }>
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ () => { getCurrencies(); myExpenses(this.state, id); } }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetchCurrencies: state.wallet.currencies,
  currencies: state.wallet.currencies,
  id: state.wallet.id,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrency()),
  myExpenses: (expenses, id) => dispatch(AddExpenses(expenses, id)),
});

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  myExpenses: PropTypes.func.isRequired,
  fetchCurrencies: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  id: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
