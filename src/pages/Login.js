import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addAssignement } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ value, name }) {
    this.setState({
      [name]: value,
    });
  }

  renderEmailInput() {
    const { email } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="Email"
            value={ email }
            onChange={ (e) => this.handleChange(e.target) }
          />
        </label>
      </div>
    );
  }

  renderPasswordInput() {
    const { password } = this.state;
    return (
      <div>
        <label htmlFor="password-input">
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Senha"
            minLength="6"
            value={ password }
            onChange={ (e) => this.handleChange(e.target) }
          />
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    const { email, password } = this.state;
    return (
      <div>
        <Link
          to="/carteira"
          onClick={ (e) => {
            if (!email && !password) {
              e.preventDefault();
            }
            this.setState(email);
          } }
        >
          Entrar
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.renderEmailInput()}
          {this.renderPasswordInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

export default Login;
