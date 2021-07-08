import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <main>
        <h1>Login</h1>
        <input data-testid="email-input" placeholder="Digite aqui o seu e-mail" />
        <input data-testid="password-input" placeholder="Senha" />
        <button type="button" disabled>Entrar</button>
      </main>
    );
  }
}

export default Login;
