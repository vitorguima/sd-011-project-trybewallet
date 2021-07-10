import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions';

class DeleteButton extends Component {
  render() {
    const { deleteExpense, id } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-btn"
        onClick={ () => deleteExpense(id) }
      >
        Apagar
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (ID) => dispatch(removeExpense(ID)),
});

export default connect(null, mapDispatchToProps)(DeleteButton);

DeleteButton.propTypes = {
  deleteExpense: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
