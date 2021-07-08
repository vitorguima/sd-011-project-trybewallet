import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { value, label, type, onChange } = this.props;

    return (
      <label htmlFor={ value }>
        {`${label}: `}
        <input onChange={ onChange } type={ type } id={ value } name={ value } />
      </label>
    );
  }
}

export default Input;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
