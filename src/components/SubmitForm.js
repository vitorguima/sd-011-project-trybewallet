import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubmitForm extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <button
          type="submit"
          onClick={ handleClick }
        >
          Adicionar Despesa
        </button>
      </div>
    );
  }
}

export default SubmitForm;

SubmitForm.propTypes = {
  handleClick: PropTypes.func,
}.isRequired;
