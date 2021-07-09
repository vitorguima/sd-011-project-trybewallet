import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubmitForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <button
          type="submit"
          onClick={ handleSubmit }
        >
          Adicionar Despesa
        </button>
      </div>
    );
  }
}

export default SubmitForm;

SubmitForm.propTypes = {
  handleSubmit: PropTypes.func,
}.isRequired;
