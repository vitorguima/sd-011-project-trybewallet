import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtEdit extends Component {
  render() {
    const { editOnClick } = this.props;
    return (
      <button
        type="button"
        onClick={ editOnClick }
      >
        Editar despesa
      </button>
    );
  }
}

BtEdit.propTypes = {
  editOnClick: PropTypes.func,
}.isRequired;

export default BtEdit;
