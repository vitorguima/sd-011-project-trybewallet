import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoins, addExpense } from '../actions';
import { methodOptions, tagOptions } from '../data';
import Select from './Select';

class TrybewalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
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
    const coinsOptions = Object.values(exchangeRates);
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
        <Select id="currency" options={ coinsOptions } onChange={ this.handleChange } />
        <Select id="method" options={ methodOptions } onChange={ this.handleChange } />
        <Select id="tag" options={ tagOptions } onChange={ this.handleChange } />
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
  exchangeRates: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.objectOf(PropTypes.any),
  ]),
  addExpenseAction: PropTypes.func.isRequired,
};

TrybewalletForm.defaultProps = {
  exchangeRates: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(TrybewalletForm);
