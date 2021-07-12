import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Valor extends Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="valor">
        Valor:
        <input
          id="valor"
          type="number"
          name="value"
          value={ value }
          placeholder="Digite o valor"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Valor.propTypes = ({
  handleChange: PropTypes.func,
  valor: PropTypes.nu,
}).isRequired;

export default Valor;
