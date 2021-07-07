import React from 'react';

// Email Regex Source: http://jsfiddle.net/ghvj4gy9/
// eslint-disable-next-line max-len
const username = '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))';
const domainName = '@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}';
const domain = '\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
const EMAIL_REGEX = new RegExp([username, domainName, domain].join(''));
const passwordLength = 6;

export default class Loginform extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isFormValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ name, value }) {
    this.setState({
      [name]: value,
    }, () => this.setState({
      isFormValid: this.validateForm(),
    }));
  }

  validateForm() {
    const { email, password } = this.state;

    return EMAIL_REGEX.test(email) && password.length >= passwordLength;
  }

  render() {
    const { email, password, isFormValid } = this.state;

    return (
      <form>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ email }
          onChange={ ({ target }) => this.handleChange(target) }
          required
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ ({ target }) => this.handleChange(target) }
          minLength="6"
          required
        />
        <button type="button" disabled={ !isFormValid }>
          Entrar
        </button>
      </form>
    );
  }
}
