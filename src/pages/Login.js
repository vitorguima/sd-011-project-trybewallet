import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      const validEmail = regexEmail.test(email);
      const validPassword = password.length >= 6;
      if (validEmail && validPassword) {
        this.setState({
          isDisabled: false,
        });
      }
    });
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          value={ email }
          placeholder="e-mail"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          value={ password }
          placeholder="password"
          name="password"
          onChange={ this.handleChange }
        />
        <button
          disabled={ isDisabled }
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
