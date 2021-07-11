import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionLogin } from '../../actions/LoginActions';

import './HomeLogin.css';

class HomeLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleEmailLogin = this.handleEmailLogin.bind(this);
    this.handlePasswordLogin = this.handlePasswordLogin.bind(this);
    this.verifyAccess = this.verifyAccess.bind(this);
  }

  handleEmailLogin({ target }) {
    const { value } = target;
    const VALID_EMAIL = value.includes('@') && value.includes('.com');
    if (VALID_EMAIL) {
      this.setState({
        email: value,
      });
      this.verifyAccess();
    } else {
      this.setState({
        email: '',
      });
      this.verifyAccess();
    }
  }

  handlePasswordLogin({ target }) {
    const { value } = target;
    const PWD_LENGTH = 5;
    const VALID_PWD = value.length >= PWD_LENGTH; // EU NÃO SEI PQ COM 6 NÃO FUNCIONOU???
    if (VALID_PWD) {
      this.setState({
        password: value,
      });
      this.verifyAccess();
    } else {
      this.setState({
        password: '',
      });
      this.verifyAccess();
    }
  }

  verifyAccess() {
    const { email, password } = this.state;
    const VALID_FIELDS = email.length > 0 && password.length > 0;

    if (VALID_FIELDS) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  handleLogin(email, password) {
    const { makeLogin } = this.props;
    makeLogin({ email, password });
  }

  render() {
    const { email, password, disabled } = this.state;

    return (
      <main className="login-container">
        <form action="">
          <label htmlFor="login">
            <p className="labels-style">
              Email:
            </p>
            <input
              type="email"
              name="email"
              onChange={ this.handleEmailLogin }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            <p className="labels-style">
              Senha:
            </p>
            <input
              type="password"
              name="password"
              onChange={ this.handlePasswordLogin }
              data-testid="password-input"
            />
          </label>
        </form>
        <Link to="/carteira" className="link-login">
          <button
            type="button"
            onClick={ () => this.handleLogin(email, password) }
            className="login-button"
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  makeLogin: (login) => dispatch(actionLogin(login)),
});

const mapStateToProps = (state) => ({
  loginState: state.user,
});

HomeLogin.propTypes = {
  makeLogin: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeLogin);
