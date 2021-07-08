import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserEmail } from '../actions/index';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
      redirect: false,
    };

    this.changeState = this.changeState.bind(this);
    this.verifyInputsField = this.verifyInputsField.bind(this);
    this.sucessUserLogin = this.sucessUserLogin.bind(this);
  }

  changeState({ target: { type, value } }) {
    this.setState({ [type]: value });
    this.verifyInputsField();
  }

  verifyInputsField() {
    const { email, password } = this.state;
    if (/\w+@\w+.com/.test(email) && /.{5,}/.test(password)) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  sucessUserLogin() {
    const { sendEmail } = this.props;
    const { email } = this.state;
    sendEmail(email);
    this.setState({ redirect: true });
  }

  render() {
    const { disabled, redirect } = this.state;

    if (redirect) return <Redirect to="/carteira" />;

    return (
      <div>
        <input
          onChange={ this.changeState }
          data-testid="email-input"
          type="email"
        />
        <input
          onChange={ this.changeState }
          data-testid="password-input"
          type="password"
        />
        <button
          onClick={ this.sucessUserLogin }
          disabled={ disabled }
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (email) => dispatch(getUserEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
