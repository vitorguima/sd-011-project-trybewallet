import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputEmail: '',
      inputPassword: '',
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.controlButton = this.controlButton.bind(this);
    this.submitEmailAndLink = this.submitEmailAndLink.bind(this);
  }

  handleEvent(event) {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value,
    }, () => this.controlButton());
  }

  verifyValidEmail(email) {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }

  verifyValidPassword(password) {
    const minLength = 6;
    return (password.length >= minLength);
  }

  controlButton() {
    const { inputEmail, inputPassword } = this.state;
    const loginButton = document.querySelectorAll('.myButton')[0];
    if (this.verifyValidEmail(inputEmail) && this.verifyValidPassword(inputPassword)) {
      loginButton.disabled = false;
    } else {
      loginButton.disabled = true;
    }
  }

  submitEmailAndLink(event) {
    event.preventDefault();
    const { userLogin, history } = this.props;
    const { inputEmail } = this.state;
    userLogin(inputEmail);
    history.push('/carteira');
  }

  render() {
    const { inputEmail, inputPassword } = this.state;
    return (
      <form onSubmit={ (event) => this.submitEmailAndLink(event) }>
        <input
          data-testid="email-input"
          name="inputEmail"
          onChange={ this.handleEvent }
          value={ inputEmail }
          type="text"
          placeholder="Email"
        />
        <input
          data-testid="password-input"
          name="inputPassword"
          onChange={ this.handleEvent }
          value={ inputPassword }
          type="password"
          placeholder="Senha"
        />
        <button
          type="submit"
          className="myButton"
          disabled
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
