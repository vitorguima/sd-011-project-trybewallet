import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectComponent from './SelectComponent';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      coin: 'USD',
      paymentMethod: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
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
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  coins: PropTypes.array,
}.isRequired;
