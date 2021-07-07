import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label>
          <input data-testid="email-input" type="text"></input>
        </label>
        <label>
          <input data-testid="password-input" type="password"></input>
        </label>
        <button></button>
      </div>
    );
  }
}

export default Login;
