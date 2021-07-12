import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserAct from '../actions';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(event) {
    event.preventDefault();
    const { emailDispatch, history } = this.props;
    const { email } = this.state;

    emailDispatch(email);
    history.push('/carteira');
  }

  handleChanges({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  validaform() {
    const { email, password } = this.state;
    const x = email;
    const y = password;
    const minPass = 6;
    if (x === undefined || y === undefined) { return true; }
    const atpos = x.indexOf('@');
    const dotpos = x.lastIndexOf('.');
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length || y.length < minPass) {
      return true;
    }
    return false;
  }

  render() {
    const isEnabled = this.validaform();
    return (
      <form>
        <label htmlFor="email-input">
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChanges }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChanges }
          />
        </label>
        <button
          type="submit"
          disabled={ isEnabled }
          onClick={ this.handleButton }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (state) => dispatch(UserAct(state)) });

LoginForm.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(LoginForm);
