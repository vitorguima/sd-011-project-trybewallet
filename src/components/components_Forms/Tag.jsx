import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tag extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="Tag">
        Tag:
        <select id="Tag" type="text" name="tag" onChange={ handleChange }>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Saúde</option>
          <option>Trabalho</option>
          <option>Transporte</option>
        </select>
      </label>
    );
  }
}

Tag.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
