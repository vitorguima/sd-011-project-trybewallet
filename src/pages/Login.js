import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    const buttonIsDisabled = true;
    const {
      email,
      password,
      dunha,
      disparaDunha,
      dispatchNewEmail,
      dispatchNewPassword,
    } = this.props;

    return (
      <div>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            data-testid="email-input"
            placeholder="Email"
            onChange={ (event) => dispatchNewEmail(event.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="text"
            data-testid="password-input"
            placeholder="Senha"
            onChange={ (event) => dispatchNewPassword(event.target.value) }
          />
        </label>
        <button type="submit" onClick={ () => disparaDunha() }>
          Entrar
        </button>
        <h1>{dunha}</h1>
        <h1>{email}</h1>
        <h2>{password}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.user.email,
  password: state.user.user.password,
  dunha: state.user.dunha,
});

const mapDispatchToProps = (dispatch) => ({
  disparaDunha: () => dispatch({ type: 'DUNHA' }),
  dispatchNewEmail: (email) => dispatch({ type: 'LOGIN_EMAIL', email }),
  dispatchNewPassword: (password) => dispatch({ type: 'LOGIN_PASSWORD', password }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
