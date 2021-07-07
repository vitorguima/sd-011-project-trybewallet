import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      isDisabled: false,
    };

    this.enableButton = this.enableButton.bind(this);
    this.hadleChange = this.hadleChange.bind(this);
    this.hadleClickButton = this.hadleClickButton.bind(this);
  }

  enableButton() {
    const { email, pass } = this.state;
    const MIN_CARACTERE = 5;
    const emailValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (emailValid.test(email) && pass.length >= MIN_CARACTERE) {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }
  }

  hadleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
    this.enableButton();
  }

  hadleClickButton(event) {
    event.preventDefault();
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <form>
        <label htmlFor="email-input">
          <input
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={ this.hadleChange }
          />
        </label>
        <label htmlFor="password-input">
          <input
            data-testid="password-input"
            type="password"
            name="pass"
            placeholder="Senha"
            onChange={ this.hadleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ !isDisabled }
          onSubmit={ this.hadleClickButton }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
