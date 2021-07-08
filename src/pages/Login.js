import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input
          name="user"
          type="email"
          data-testid="email-input"
          placeholder="Email"
        />
        <input
          style={ { display: 'flex', marginTop: '10px' } }
          name="password"
          type="password"
          data-testid="password-input"
          placeholder="Senha"
        />
        <button type="submit">
          Entrar
        </button>
      </div>

    );
  }
}

export default Login;
