import React from 'react';

const Login = () => (
  <form>
    <input type="email" data-testid="email-input" />
    <input type="password" data-testid="password-input" min-length="6" />
    <button type="button">Entrar</button>
  </form>
);

export default Login;
