import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      valid: false,
    };

    this.inputHandle = this.inputHandle.bind(this);
    this.checkInput = this.checkInput.bind(this);
  }

  inputHandle({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  checkInput() {
    const { email, password } = this.state;
    const validEmail = (email.includes('@') && email.includes('.com'));
    const long = 6;
    if (validEmail && password.length >= long) {
      this.setState({ valid: true });
    } else {
      this.setState({ valid: false });
    }
  }

  render() {
    const { email, valid } = this.state;
    const { sendLogin } = this.props;
    return (
      <div className="loginContainer">

        <div className="loginHeroDiv">
          <h1>Login</h1>
        </div>

        <form className="loginForm">
          <label htmlFor="email" className="formLabel">
            <input
              onChange={ this.inputHandle }
              placeholder="Email"
              name="email"
              type="text"
              onKeyUp={ this.checkInput }
              data-testid="email-input"
            />
          </label>

          <label htmlFor="password" className="formLabel">
            <input
              onChange={ this.inputHandle }
              placeholder="Senha"
              name="password"
              type="password"
              onKeyUp={ this.checkInput }
              data-testid="password-input"
            />
          </label>
          <Link to="/carteira">
            <button
              className="submitButton"
              type="button"
              disabled={ !valid }
              onClick={ () => sendLogin(email) }
            >
              Entrar
            </button>
          </Link>
        </form>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendLogin: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  sendLogin: PropTypes.func.isRequired,
};
