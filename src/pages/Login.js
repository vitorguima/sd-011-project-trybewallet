import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLoginAction } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      btnDisabled: true,
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  componentDidUpdate() {
    this.checkLogin();
  }

  checkLogin() {
    const { email, password, btnDisabled } = this.state;
    const regEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const checkEmail = regEmail.test(email);
    const numLength = 6;
    const checkPassword = password.length >= numLength;
    if (checkEmail && checkPassword && btnDisabled) {
      this.setState({ btnDisabled: false });
    } else if ((!checkEmail || !checkPassword) && !btnDisabled) {
      this.setState({ btnDisabled: true });
    }
  }

  handleChangeInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password, btnDisabled } = this.state;
    const { validateLogin } = this.props;
    return (
      <div>
        <h2>TrybeWallet</h2>
        <input
          data-testid="email-input"
          type="email"
          placeholder="Informe seu email"
          name="email"
          value={ email }
          required
          onChange={ this.handleChangeInput }
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Informe sua senha"
          name="password"
          value={ password }
          required
          onChange={ this.handleChangeInput }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ btnDisabled }
            onClick={ () => validateLogin(email, password) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  validateLogin: (email) => dispatch(userLoginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  validateLogin: PropTypes.func,
}.isRequired;
