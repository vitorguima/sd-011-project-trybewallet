import React, { Component } from 'react';
import '../App.css';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <input
          data-testid="email-input"
          type="email"
        />
        <input
          data-testid="password-input"
          type="password"
        />
        <button
          type="button"
        >
          Entrar
        </button>
      </div>

    );
  }
}

export default Login;
