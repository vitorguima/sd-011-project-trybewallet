import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    const buttonIsDisabled = true;
    const { email, password, dunha } = this.props;

    return (
      <div>
        <label htmlFor="email-input">
          Email
          <input type="email" data-testid="email-input" placeholder="Email" />
        </label>
        <label htmlFor="password-input">
          Senha
          <input type="text" data-testid="password-input" placeholder="Senha" />
        </label>
        <button type="submit" disabled={ buttonIsDisabled }>
          Entrar
        </button>
        <h1>{dunha}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.user.email,
  password: state.user.user.password,
  dunha: state.user.dunha,
});

export default connect(mapStateToProps)(Login);
