import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { newExpense } from '../../actions/ExpenseActions';
import FormCurrencys from '../FormCurrencys';
import { fetchCurrencys } from '../../services';
import SelectInputs from './SelectInputs';
import './FormMoney.css';

class FormMoney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: '',
      tag: '',
      description: '',
      exchangeRates: [],
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleValueChange({ target }) {
    const { name, value } = target;
    await this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { addExpense, stateInfo } = this.props;
    const expense = this.state;
    expense.id += stateInfo;
    expense.exchangeRates = await fetchCurrencys();
    await addExpense(expense);
  }

  render() {
    const { value,
      currency,
      tag,
      method,
      description,
    } = this.state;

    return (
      <form>
        <label htmlFor="value" className="value-label">
          Valor:
          <input
            type="number"
            name="value"
            id="value"
            onChange={ this.handleValueChange }
            value={ value }
          />
        </label>
        <FormCurrencys currency={ currency } onChange={ this.handleValueChange } />
        <label htmlFor="description">
          Descrição:
          <textarea
            name="description"
            id="description"
            maxLength="100"
            cols="30"
            rows="2"
            value={ description }
            onChange={ this.handleValueChange }
          />
        </label>
        <SelectInputs
          name="method"
          value={ method }
          onChange={ this.handleValueChange }
        />
        <SelectInputs
          name="tag"
          value={ tag }
          onChange={ this.handleValueChange }
        />
        <button type="submit" onClick={ this.handleSubmit }>
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense, convertedValue) => dispatch(newExpense(expense, convertedValue)),
});

const mapStateToProps = (state) => ({
  stateInfo: state.wallet.id,
});

FormMoney.propTypes = {
  addExpense: PropTypes.func.isRequired,
  stateInfo: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormMoney);
