import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <div>Login</div>
        <label htmlFor="email-input">
          Email
          <input data-testid="email-input" type="text" id="email-input" />
        </label>

        <label htmlFor="password-input">
          Password
          <input data-testid="password-input" type="text" id="password-input" />
        </label>

        <button type="submit">Entrar</button>
      </>
    );
  }
}

export default Login;
