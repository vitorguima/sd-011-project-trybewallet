import React from 'react';
import PropTypes from 'prop-types';

class Descrição extends React.Component {
  render() {
    const { inputValue } = this.props;
    return (
      <label htmlFor="Descrição">
        Descrição
        <input
          type="text"
          name="description"
          id="Descrição"
          onChange={ inputValue }
        />
      </label>
    );
  }
}

Descrição.propTypes = {
  inputValue: PropTypes.string,
}.isRequired;

export default Descrição;
