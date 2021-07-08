import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import register from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputEmail: '',
      inputPassword: '',
    };

    this.buttonHandle = this.buttonHandle.bind(this);
  }

  handler(e) {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  }

  buttonHandle() {
    const { inputEmail, inputPassword } = this.state;
    const emailValidate = /\S+@\S+\.\S+/;
    const passwordLength = 6;
    if (emailValidate.test(inputEmail) && inputPassword.length >= passwordLength) {
      return false;
    }
    return true;
  }

  render() {
    const { inputEmail } = this.state;
    const { login } = this.props;
    console.log(inputEmail);
    return (
      <div>
        <label htmlFor="login-email">
          Login
          <input
            type="email"
            data-testid="email-input"
            className="login-email"
            onChange={ (e) => this.handler(e) }
            name="inputEmail"
          />
        </label>
        <label htmlFor="login-pass">
          Senha
          <input
            type="password"
            data-testid="password-input"
            onChange={ (e) => this.handler(e) }
            className="login-pass"
            id="password"
            name="inputPassword"
          />
        </label>
        <Link to="/carteira">
          <button
            type="submit"
            disabled={ this.buttonHandle() }
            onClick={ () => login({ inputEmail }) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(register(payload)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
