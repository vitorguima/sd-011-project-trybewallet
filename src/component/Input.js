import React from 'react';
import PropTypes from 'prop-types';

function Input({ label, type, name }) {
  return (
    <div>
      <label htmlFor={ name }>
        {label}
      </label>
      <input
        id={ name }
        name={ name }
        type={ type }
        // onChange={ onChange }
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
};

export default Input;
