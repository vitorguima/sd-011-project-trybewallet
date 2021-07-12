import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserAct from '../actions';
import ButtonOff from '../components/ButtonOf';

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

  validaform(email, password) {
    const x = email;
    const y = password;
    const minPass = 6;
    if (x === undefined || y === undefined) { return <ButtonOff />; }
    const atpos = x.indexOf('@');
    const dotpos = x.lastIndexOf('.');
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length || y.length < minPass) {
      return <ButtonOff />;
    }
    return (
      <Link to="/carteira">
        <button
          type="submit"
          onClick={ this.handleButton }
        >
          Entrar
        </button>
      </Link>);
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email-input">
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChanges }
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChanges }
            value={ password }
          />
        </label>
        {this.validaform(email, password)}
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
