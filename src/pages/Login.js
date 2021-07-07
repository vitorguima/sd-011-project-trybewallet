import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
      status: true,
      redirect: false,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.ableButton = this.ableButton.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleChangeEmail({ target }) {
    const { value } = target;
    this.setState({
      email: value,
    }, () => this.ableButton());
  }

  handleChangePassword({ target }) {
    const { value } = target;
    this.setState({
      senha: value,
    }, () => this.ableButton());
  }

  ableButton() {
    const { email, senha } = this.state;
    const numMin = 6;
    const regex = /\w+@\w+.com(.br)?/; /* Regex feito pelo Rodrigo Ruan */
    if (regex.test(email) && senha.length >= numMin) {
      this.setState({
        status: false,
      });
    } else {
      this.setState({
        status: true,
      });
    }
  }

  handleClickButton() {
    const { email } = this.state;
    const { emailToWallet } = this.props;
    emailToWallet(email);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { status, redirect } = this.state;
    return (
      <div>
        Login
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
          onChange={ this.handleChangeEmail }
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
          onChange={ this.handleChangePassword }
        />
        <button
          type="button"
          disabled={ status }
          onClick={ () => this.handleClickButton() }
        >
          Entrar
        </button>
        {redirect && <Redirect to="/carteira" />}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  emailToWallet: (email) => dispatch(actions.emailToWallet(email)),
});

Login.propTypes = {
  emailToWallet: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
