import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DeleteBtn extends Component {
  render() {
    const { handleDelete, expense } = this.props;
    return (
      <button
        type="submit"
        data-testid="delete-btn"
        onClick={ () => handleDelete(expense) }
      >
        Delete
      </button>
    );
  }
}

DeleteBtn.propTypes = {
  handleDelete: PropTypes.func,
  expense: PropTypes.object,
}.isRequired;
