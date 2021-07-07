import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <label htmlFor="email-input">
              <input
                type="email"
                id="email-input"
                data-testid="email-input"
              />
            </label>
            <label htmlFor="password-input">
              <input
                type="password"
                id="password-input"
                data-testid="password-input"
              />
            </label>
            <button type="button">Entrar</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Login;
