import React from 'react';
import 'bulma/css/bulma.min.css';
// import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <section className="login">
        <h1> Sistema Trybe Wallet </h1>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="E-mail"
              data-testid="email-input"
            />
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              data-testid="password-input"
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success" type="button">
              Entrar
            </button>
          </p>
        </div>
      </section>
    );
  }
}

export default Login;
