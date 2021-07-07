import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delExpenseAction } from '../actions';

class BtDelet extends Component {
  render() {
    const { del, id } = this.props;
    return (
      <button
        data-testid="delete-btn"
        type="button"
        onClick={ () => del(id) }
      >
        Excluir
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  del: (id) => dispatch(delExpenseAction(id)),
});

BtDelet.propTypes = {
  id: PropTypes.number,
  del: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(BtDelet);
