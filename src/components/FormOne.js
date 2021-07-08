import React from 'react';
import PropTypes from 'prop-types';

class FormOne extends React.Component {
  render() {
    const { handleState } = this.props;

    return (
      <fieldset>
        <label htmlFor="valor-input">
          Valor
          <input
            type="number"
            name="value"
            id="valor-input"
            onChange={ (estado) => handleState(estado) }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            type="text"
            name="description"
            id="description-input"
            onChange={ (estado) => handleState(estado) }
          />
        </label>
      </fieldset>
    );
  }
}

export default FormOne;

FormOne.propTypes = {
  handleState: PropTypes.func.isRequired,
};
