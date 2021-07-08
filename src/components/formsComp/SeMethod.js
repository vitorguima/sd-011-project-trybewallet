import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SeMethod extends Component {
  render() {
    const { value, handle } = this.props;
    return (
      <label htmlFor="method-input">
        Método de pagamento:
        <select
          name="method"
          data-testid="method-input"
          id="method-input"
          value={ value }
          onChange={ handle }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SeMethod.propTypes = {
  value: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default SeMethod;
