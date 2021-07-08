import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtAdd extends Component {
  render() {
    const { addOnClick } = this.props;
    return (
      <button
        type="button"
        className="bt-exp"
        onClick={ addOnClick }
      >
        Adicionar despesa
      </button>
    );
  }
}

BtAdd.propTypes = {
  addOnClick: PropTypes.func,
}.isRequired;

export default BtAdd;
