import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SeTag extends Component {
  render() {
    const { value, handle } = this.props;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          required
          name="tag"
          id="tag"
          value={ value }
          onChange={ handle }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

SeTag.propTypes = {
  value: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default SeTag;
