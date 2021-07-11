import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Valor extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="valor">
        Valor:
        <input
          id="valor"
          type="number"
          name="valor"
          placeholder="Digite o valor"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Valor.propTypes = ({
  handleChange: PropTypes.func,
}).isRequired;

export default Valor;
