import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      disabled: true,
    };

    this.handleValidate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    this.validate();
  }

  handleValidate() {
    const { email, senha, disabled } = this.state;
    const characters = 6;
    if (email.split('').includes('@')
    && email.split('.').includes('com') && senha.length >= characters && disabled) {
      this.setState({ disabled: false });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, senha, disabled } = this.state;
    return (
      <div>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
            placeholder="alguem@alguem.com"
          />
        </label>

        <label htmlFor="password">
          <input
            type="senha"
            name="senha"
            data-testid="password-input"
            value={ senha }
            onChange={ this.handleChange }
            placeholder="Senha"
          />
        </label>
        <button type="button" disabled={ disabled }>Entrar</button>
      </div>);
  }
}

export default Login;
