import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  checkEmail() {
    const emailValid = /^[a-zA-Z]+@[a-zA-Z]+\.[com]{3,}$/i;
    const length = 6;
    const { email, password } = this.state;

    return emailValid.test(email) && password.length >= length;
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    },
    () => this.setState({
      disabled: !this.checkEmail(),
    }));
  }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <form>
          <input
            name="email"
            type="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <input
            name="password"
            type="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <button type="button" disabled={ disabled }>Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
