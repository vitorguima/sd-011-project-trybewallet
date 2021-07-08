import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { userLoginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isEmailValid: false,
      password: '',
      isPasswordValid: false,
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleEmailChange({ target }) {
    const { value } = target;
    const isEmailValid = this.validateEmail(value);
    this.setState({ email: value, isEmailValid });
  }

  validateEmail(string) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (string.match(regex)) {
      return true;
    }
    return false;
  }

  handlePasswordChange({ target }) {
    const { value } = target;
    const isPasswordValid = this.validatePassword(value);
    this.setState({ password: value, isPasswordValid });
  }

  validatePassword(string) {
    const minLength = 6;
    return string.trim().length >= minLength;
  }

  handleLogin() {
    const { userLogin } = this.props;
    const { email } = this.state;
    userLogin(email);
  }

  render() {
    const { isEmailValid, isPasswordValid, email, password } = this.state;
    const { loggedEmail } = this.props;

    if (loggedEmail) {
      return <Redirect to="/carteira" />;
    }

    return (
      <form>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          data-testid="email-input"
          required
          onChange={ this.handleEmailChange }
          value={ email }
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          data-testid="password-input"
          onChange={ this.handlePasswordChange }
          value={ password }
          required
        />
        <button
          type="button"
          disabled={ !isEmailValid || !isPasswordValid }
          onClick={ this.handleLogin }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedEmail: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (email) => dispatch(userLoginAction(email)),
});

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
  loggedEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
