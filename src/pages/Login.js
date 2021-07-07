import React from 'react';
import { connect } from 'react-redux';
import * as userAction from '../actions';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  submitLogin = (event) => {
    event.preventDefault();
    const { fazerLogin } = this.props;
    fazerLogin(this.state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className="form-login">
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            className="mail-input"
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            data-testid="password-input"
            className="password-input"
            type="text"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" onClick={ this.submitLogin }>Entrar</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fazerLogin: (credentials) => dispatch(userAction.email(credentials)),
});

export default connect(null, mapDispatchToProps)(Login);
