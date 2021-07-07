import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

export default class LabelledInput extends React.Component {
  render() {
    const { label, ...attributes } = this.props;
    const { id } = attributes;

    return (
      <label htmlFor={ id }>
        {`${label}:`}
        <Input { ...attributes } />
      </label>
    );
  }
}

LabelledInput.propTypes = {
  label: PropTypes.string,
}.isRequired;
