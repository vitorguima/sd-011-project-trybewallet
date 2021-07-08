import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import setLogin from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirect: false,
      disabled: true,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checksDetails = this.checksDetails.bind(this);
  }

  handleChangeEmail({ target }) {
    const email = target.value;
    this.setState(() => ({
      email,
    }), () => this.checksDetails());
  }

  handleChangePassword({ target }) {
    const password = target.value;
    this.setState(() => ({
      password,
    }), () => this.checksDetails());
  }

  handleClick() {
    const { loginOn } = this.props;
    const { email } = this.state;
    loginOn(email);
    this.setState({
      redirect: true,
    });
  }

  // Tive ajuda do Guilherme Nunes
  checksDetails() {
    const checks = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const biggerDigt = 5;
    const { email, password } = this.state;
    const enabled = checks.test(String(email).toLowerCase())
      && password.length > biggerDigt;
    this.setState(() => ({
      disabled: !enabled,
    }));
  }

  render() {
    const { disabled, redirect } = this.state;

    return (
      <div>
        <input
          type="text"
          data-testid="email-input"
          placeholder="Digite seu e-mail"
          onChange={ this.handleChangeEmail }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Digite sua senha"
          onChange={ this.handleChangePassword }
        />
        <button type="submit" onClick={ this.handleClick } disabled={ disabled }>
          Entrar
        </button>
        {redirect && (<Redirect to="/carteira" />)}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginOn: (email) => dispatch(setLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  loginOn: PropTypes.func.isRequired,
};
