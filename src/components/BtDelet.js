import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delExpenseAction } from '../actions';

class BtDelet extends Component {
  render() {
    const { del, id } = this.props;
    return (
      <button
        className="bt-del-edit"
        data-testid="delete-btn"
        type="button"
        onClick={ () => del(id) }
      >
        <img src="https://img.icons8.com/material-rounded/24/fa314a/filled-trash.png" alt="trash" />
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
