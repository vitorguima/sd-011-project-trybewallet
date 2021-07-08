import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectComponent from './SelectComponent';
import { getCoins } from '../actions';

class Form extends Component {
  constructor({ expenses }) {
    super({ expenses });
    this.state = {
      id: expenses.length || 0,
      value: '',
      description: '',
      coin: 'USD',
      paymentMethod: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { expenses, fetchApiCoins } = this.props;
    fetchApiCoins(this.state);
    this.setState({
      id: expenses.length + 1,
      value: '',
      description: '',
      coin: 'USD',
      paymentMethod: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const { coins } = this.props;
    const { value, description, coin, paymentMethod, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            onChange={ this.handleChange }
            id="value"
            type="text"
            name="value"
            value={ value }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            onChange={ this.handleChange }
            id="description"
            type="text"
            name="description"
            value={ description }
          />
        </label>
        <SelectComponent
          coins={ coins }
          coin={ coin }
          payment={ paymentMethod }
          tags={ tag }
          onChange={ this.handleChange }
        />
        <button onClick={ this.handleClick } type="button">Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  coins: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApiCoins: (state) => dispatch(getCoins(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
