import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Descrição extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="Descrição">
        Descrição:
        <input
          id="Descrição"
          type="text"
          name="description"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Descrição.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
