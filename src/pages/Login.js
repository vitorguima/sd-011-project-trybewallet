import React from 'react';
import { connect } from 'react-redux';
import './Login.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.enableButton = this.enableButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  enableButton() {
    const form = document.querySelector('.login-form');
    const buttonSubmit = document.querySelector('.submit-button');
    buttonSubmit.disabled = !form.checkValidity();
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email } = this.state;
    const { emailDispatch } = this.props;
    return (
      <div className="login-page">
        <h1 className="login-page-title title is-1">Trybewallet &#128184;</h1>
        <h2 className="login-page-subtitle subtitle is-4">Controle de despesas</h2>
        <form className="login-form" onChange={ this.enableButton }>
          <input
            className="input is-focused is-rounded"
            placeholder="e-mail"
            name="email"
            type="email"
            data-testid="email-input"
            required
            onChange={ this.handleChange }
          />
          <input
            className="input is-focused is-rounded"
            placeholder="senha"
            type="password"
            data-testid="password-input"
            pattern=".{6,}"
            title="A senha deve ter no mínimo 6 caracteres"
            required
          />
          <Link
            to="/carteira"
            onClick={ () => emailDispatch(email) }
          >
            <button
              className="submit-button button is-info is-light"
              type="submit"
              disabled
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
  emailDispatch: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
