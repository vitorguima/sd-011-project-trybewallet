import React from 'react';
import PropTypes from 'prop-types';

class Valor extends React.Component {
  render() {
    const { inputValue } = this.props;
    return (
      <label htmlFor="Valor">
        Valor
        <input
          type="number"
          name="value"
          id="Valor"
          onChange={ inputValue }
        />
      </label>
    );
  }
}

Valor.propTypes = {
  inputValue: PropTypes.number,
}.isRequired;

export default Valor;
