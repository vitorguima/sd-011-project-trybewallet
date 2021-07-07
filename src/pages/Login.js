import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  checkLogin() {
    const minPasswordLenght = 6;
    const { email, password } = this.state;
    if (email.includes('@' && '.com') && password.length >= minPasswordLenght) {
      this.setState({
        buttonDisabled: false,
      });
    }
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.checkLogin());
  }

  submitEmail(email) {
    // const { submit } = this.props;
    const { history, submit } = this.props;
    submit(email);
    history.push('/carteira');
  }

  render() {
    const { buttonDisabled, email, password } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          Email
          <input
            data-testid="email-input"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChanges }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            data-testid="password-input"
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChanges }
          />
        </label>
        <button
          type="button"
          disabled={ buttonDisabled }
          onClick={ () => this.submitEmail(email) }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submit: (email) => dispatch(requestLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  submit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
