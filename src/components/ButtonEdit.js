import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpense } from '../actions';

class ButtonEdit extends React.Component {
  render() {
    const { id, editExp } = this.props;
    return (
      <button
        type="button"
        data-testid="edit-btn"
        onClick={ () => editExp(id) }
      >
        Editar
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  editExp: (id) => dispatch(editExpense(id)),
});

export default connect(null, mapDispatchToProps)(ButtonEdit);

ButtonEdit.propTypes = {
  id: PropTypes.number.isRequired,
  editExp: PropTypes.func.isRequired,
};
