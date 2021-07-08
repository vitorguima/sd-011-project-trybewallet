import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { actionEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.saveEmail = this.saveEmail.bind(this);
  }

  saveEmail(event) {
    const { target: { value } } = event;
    this.setState({
      email: value,
    });
  }

  checkForm() {
    const form = document.getElementById('login-form');
    const buttonSubmit = document.getElementById('button-submit');
    buttonSubmit.disabled = !form.checkValidity();
  }

  render() {
    const { email } = this.state;
    const { emailDispatch } = this.props;
    return (
      <div>
        <form id="login-form" onChange={ this.checkForm }>
          <input
            type="email"
            data-testid="email-input"
            placeholder="Email"
            required
            onChange={ this.saveEmail }
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="Senha"
            pattern=".{6,}"
            required
          />
          <Link to="/carteira" onClick={ () => emailDispatch(email) }>
            <button
              type="submit"
              id="button-submit"
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
  emailDispatch: (state) => dispatch(actionEmail(state)) });

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
