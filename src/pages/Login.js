import React from 'react';
import {
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
      redirect: false,
    };

    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.checkInfos = this.checkInfos.bind(this);
    this.clickEnter = this.clickEnter.bind(this);
  }

  async setEmail({ target }) {
    const email = target.value;
    await this.setState(() => ({
      email,
    }));
    this.checkInfos();
  }

  setPassword({ target }) {
    const password = target.value;
    this.setState(() => ({
      password,
    }), () => this.checkInfos());
  }

  clickEnter() {
    const { sendEmail } = this.props;
    const { email } = this.state;
    sendEmail(email);
    this.setState({
      redirect: true,
    });
  }

  checkInfos() {
    const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const biggerThan = 5;
    const { email, password } = this.state;
    const conditionToEnable = re.test(String(email).toLowerCase())
      && password.length > biggerThan;
    this.setState(() => ({
      disabled: !conditionToEnable,
    }));
  }

  render() {
    const { disabled, redirect } = this.state;
    return (
      <div>
        <input type="text" onChange={ this.setEmail } data-testid="email-input" />
        <input
          type="password"
          onChange={ this.setPassword }
          data-testid="password-input"
        />
        <button type="submit" onClick={ this.clickEnter } disabled={ disabled }>
          Entrar
        </button>
        {redirect && (<Redirect to="/carteira" />)}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (email) => dispatch(setUserEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  sendEmail: PropTypes.func.isRequired,
};
