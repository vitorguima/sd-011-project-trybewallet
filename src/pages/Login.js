import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateState = this.validateState.bind(this);
  }

  componentDidUpdate() {
    this.validateState();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validateState() {
    const { password, email, disabled } = this.state;
    const regex = /^\w+(\w+)@\w+([-.]\w+).\w+([-.]\w+)*$/;
    const passwordMinLength = 6;
    if (regex.test(email) && password.length >= passwordMinLength && disabled) {
      this.setState((prev) => ({ disabled: !prev.disabled }));
    }
  }

  render() {
    const { password, email, disabled } = this.state;
    return (
      <div>
        <input
          type="text"
          name="email"
          data-testid="email-input"
          placeholder="Email"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ this.handleChange }
          value={ password }
        />
        <button type="button" disabled={ disabled }>
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
