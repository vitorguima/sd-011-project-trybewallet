import React from 'react';

// http://jsfiddle.net/ghvj4gy9/
const username = '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))';
const domainName = '@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}';
const domain = '\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
const EMAIL_REGEX = new RegExp([username, domainName, domain].join(''));
const passLength = 6;

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      btnDisabled: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ value, name }) {
    this.setState({
      [name]: value,
    }, () => this.setState({
      btnDisabled: this.openButton(),
    }));
  }

  openButton() {
    const { email, password } = this.state;

    return EMAIL_REGEX.test(email) && password.length >= passLength;
  }

  render() {
    const { email, password, btnDisabled } = this.state;
    return (
      <form>
        <label htmlFor="email-input">
          Insira seu email:
          <input
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ ({ target }) => this.handleChange(target) }
            type="email"
          />
        </label>

        <br />
        <label htmlFor="password-input">
          Insira sua senha:
          <input
            data-testid="password-input"
            name="password"
            minLength="6"
            required
            value={ password }
            onChange={ ({ target }) => this.handleChange(target) }
            type="password"
          />
        </label>

        <button type="button" disabled={ !btnDisabled }>Entrar</button>

      </form>
    );
  }
}

export default LoginForm;

// Luiz Wendel me ajudou muito no requisito 2 e 3
