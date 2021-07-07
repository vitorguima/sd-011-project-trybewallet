import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>Logo</div>
        <div>
          <input data-testid="email-input" type="email" placeholder="Email: " />
        </div>
        <div>
          <input data-testid="password-input" type="password" placeholder="Password: " />
        </div>
        <div>
          <button type="button">Entrar</button>
        </div>
      </div>
    );
  }
}

export default Login;
