import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormDescription extends Component {
  render() {
    const { handleInputs, description } = this.props;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          id="description"
          name="description"
          value={ description }
          onChange={ handleInputs }
        />
      </label>
    );
  }
}

FormDescription.propTypes = {
  handleInputs: PropTypes.func,
  description: PropTypes.string,
}.isRequired;
