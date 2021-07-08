import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleSubmit() {
    const { handleLogin } = this.props;
    const { email } = this.state;
    handleLogin(email);
  }

  validateEmailAndPassword() {
    const { email, password } = this.state;
    const SIX = 6;
    const validEmail = 'alguem@email.com';
    if (email === validEmail && password.length >= SIX) {
      return false;
    }
    return true;
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    const disabled = this.validateEmailAndPassword();
    const { email, password } = this.state;
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleEmail }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handlePassword }
          />
        </label>
        <button disabled={ disabled } type="button" onClick={ this.handleSubmit }>
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (email) => dispatch(actions.handleLogin(email)),
});

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
