import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handlerInput = this.handlerInput.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidUpdate() {
    this.validate();
  }

  validate() {
    const { email, password, disabled } = this.state;
    const validateEmail = email.split('').includes('@')
      && email.split('.').includes('com');
    const lengthPasswords = 6;
    const validatePassword = password.length >= lengthPasswords;
    if (validateEmail && validatePassword && disabled) {
      this.setState({
        disabled: false,
      });
    } else if ((!validateEmail || !validatePassword) && !disabled) {
      this.setState({
        disabled: true,
      });
    }
  }

  handlerInput({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { disabled, email, password } = this.state;
    const { gEmail } = this.props;
    return (
      <>
        <div>Login</div>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            value={ email }
            name="email"
            onChange={ this.handlerInput }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            name="password"
            value={ password }
            onChange={ this.handlerInput }
            data-testid="password-input"
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => gEmail(email) }
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>

      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  gEmail: (email) => dispatch(getEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  gEmail: PropTypes.func,
}.isRequired;
