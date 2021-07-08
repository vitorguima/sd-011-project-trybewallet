import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtEdit extends Component {
  render() {
    const { editOnClick } = this.props;
    return (
      <button
        type="button"
        data-testid="edit-btn"
        onClick={ editOnClick }
      >
        Editar Despesa
      </button>
    );
  }
}

BtEdit.propTypes = {
  editOnClick: PropTypes.func,
}.isRequired;

export default BtEdit;
