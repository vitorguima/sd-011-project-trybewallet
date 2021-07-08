import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../actions";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isEmailValid: false,
      password: "",
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
    const validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (string.match(validEmailRegex)) {
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
    return string.trim().length >= 6;
  }

  handleLogin() {
    const { userLogin } = this.props;
    const { email } = this.state;
    userLogin(email);
  }

  render() {
    const { isEmailValid, isPasswordValid } = this.state;
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
          onChange={this.handleEmailChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          data-testid="password-input"
          onChange={this.handlePasswordChange}
          required
        />
        <button
          type="button"
          disabled={!isEmailValid || !isPasswordValid}
          onClick={this.handleLogin}
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
  userLogin: (email) => dispatch(userLogin(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
