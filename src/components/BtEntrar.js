import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../actions';

class BtEntrar extends Component {
  render() {
    const { isDisabled, email, enter } = this.props;
    return (
      <Link
        to="/carteira"
      >
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ () => enter(email) }
        >
          Entrar
        </button>
      </Link>
    );
  }
}

BtEntrar.propTypes = {
  isDisabled: PropTypes.bool,
  email: PropTypes.string,
  enter: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  enter: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(BtEntrar);
