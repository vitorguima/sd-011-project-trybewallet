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
    this.validate = this.validate.bind(this);
  }

  componentDidUpdate() {
    this.validate();
  }

  validate() {
    const { email, password, disabled } = this.state;
    const number = 6;
    if (email.split('').includes('@')
      && email.split('.').includes('com')
      && password.length >= number
      && disabled) {
      this.setState({ disabled: false });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
            placeholder="email@email.com"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
            placeholder="Senha"
          />
        </label>
        <button
          type="button"
          disabled={ disabled }
        >
          Entrar
        </button>
      </div>);
  }
}

export default Login;
