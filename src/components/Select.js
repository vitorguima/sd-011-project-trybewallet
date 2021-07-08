import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { label, value, options, onChange } = this.props;

    return (
      <label htmlFor={ value }>
        {`${label}: `}
        <select onChange={ onChange } name={ value } id={ value }>
          {options.map((optionContent, index) => (
            <option key={ index }>{optionContent}</option>
          ))}
        </select>
      </label>
    );
  }
}

export default Select;

Select.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
