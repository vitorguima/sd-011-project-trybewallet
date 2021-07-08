import React from 'react';
import BtEntrar from '../components/BtEntrar';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  validation() {
    const { email, password } = this.state;
    const SIX_CHARACTERS = 6;
    const expected = /^[a-z0-9.]+@[a-z0-9]+\.com+$/;
    const emailValidation = expected.test(email);
    if (emailValidation && password.length >= SIX_CHARACTERS) {
      return true;
    }
    return false;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="bg-login">
        <div className="form-login">
          <h1 className="title-login">My Wallet</h1>
          <img src="https://img.icons8.com/ios-filled/120/ffffff/wallet-app.png" alt="wallet" />
          <form>
            <label htmlFor="email">
              <input
                data-testid="email-input"
                name="email"
                value={ email }
                onChange={ (e) => this.handleChange(e) }
                placeholder="E-mail"
              />
            </label>
            <br />
            <label htmlFor="password">
              <input
                data-testid="password-input"
                name="password"
                type="password"
                value={ password }
                onChange={ (e) => this.handleChange(e) }
                placeholder="Password"
              />
            </label>
          </form>
          {this.validation()
            ? <BtEntrar isDisabled={ false } email={ email } />
            : <BtEntrar isDisabled email={ email } />}
        </div>
      </div>
    );
  }
}

export default Login;
