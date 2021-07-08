import React from 'react';
import PropTypes from 'prop-types';

function Textarea({ label, name }) {
  return (
    <div>
      <label htmlFor={ name }>
        {label}
      </label>
      <textarea
        id={ name }
        name={ name }
        // onChange={ onChange }
      />
    </div>
  );
}

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
};

export default Textarea;
