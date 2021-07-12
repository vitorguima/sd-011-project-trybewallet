import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EditBtn extends Component {
  render() {
    const { handleDelete, expense } = this.props;
    return (
      <button
        type="submit"
        data-testid="edit-btn"
        onClick={ () => handleDelete(expense) }
      >
        Edit
      </button>
    );
  }
}

EditBtn.propTypes = {
  handleDelete: PropTypes.func,
  expense: PropTypes.object,
}.isRequired;
