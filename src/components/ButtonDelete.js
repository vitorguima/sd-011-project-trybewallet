import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class ButtonDelete extends React.Component {
  render() {
    const { id, deleteExp } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-btn"
        onClick={ () => deleteExp(id) }
      >
        Deletar
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteExp: (id) => dispatch(deleteExpense(id)),
});

export default connect(null, mapDispatchToProps)(ButtonDelete);

ButtonDelete.propTypes = {
  id: PropTypes.number.isRequired,
  deleteExp: PropTypes.func.isRequired,
};
