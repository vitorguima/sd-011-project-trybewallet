import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';

export default class LabelledSelect extends React.Component {
  render() {
    const { label, ...attributes } = this.props;
    const { id } = attributes;

    return (
      <label htmlFor={ id }>
        {`${label}:`}
        <Select { ...attributes } />
      </label>
    );
  }
}

LabelledSelect.propTypes = {
  label: PropTypes.string,
}.isRequired;
