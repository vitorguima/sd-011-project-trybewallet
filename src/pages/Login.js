import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail({ target }) {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(target.value)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <form>
        <input
          onChange={ () => this.validateEmail() }
          type="email"
          data-testid="email-input"
        />
        <input type="password" data-testid="password-input" />
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
