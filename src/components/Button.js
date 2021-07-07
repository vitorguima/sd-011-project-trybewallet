import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { validateLogin } from '../actions';

class Button extends Component {
  render() {
    const { email, password, validateNewLogin, disabled } = this.props;
    return (
      <Link to="/carteira">
        <button
          type="button"
          disabled={ disabled }
          onClick={ () => validateNewLogin(email, password) }
        >
          Entrar
        </button>
      </Link>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  validateNewLogin: (email, password) => dispatch(validateLogin(email, password)),
});

export default connect(null, mapDispatchToProps)(Button);

Button.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  validateNewLogin: PropTypes.func.isRequired,
};
