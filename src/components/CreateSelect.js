import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreateSelect extends Component {
  render() {
    const { name, label, arraySelect, value, handleChange, dataTestid } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select
          data-testid={ dataTestid }
          id={ name }
          name={ name }
          onChange={ handleChange }
          value={ value }
        >
          { arraySelect.map((item, index) => (
            <option key={ `${name}-${index}` } value={ item }>{ item }</option>
          ))}
        </select>
      </label>
    );
  }
}

CreateSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  arraySelect: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
