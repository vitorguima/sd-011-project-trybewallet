import React from 'react';
import PropTypes from 'prop-types';

class FormThree extends React.Component {
  constructor() {
    super();
    this.state = {
      tag: '',
    };
  }

  render() {
    const { handleState } = this.props;
    return (
      <fieldset>
        <label htmlFor="despesa-input">
          Tag
          <select
            id="despesa-input"
            name="tag"
            onChange={ (estado) => handleState(estado) }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </fieldset>
    );
  }
}

export default FormThree;

FormThree.propTypes = {
  handleState: PropTypes.func.isRequired,
};
