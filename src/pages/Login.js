import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUsername, SetPassword } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoginValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.sendDispatch = this.sendDispatch.bind(this);
  }

  validateEmail() {
    const { email, password } = this.state;
    const reqLenght = 6;
    const re = /\S+@\S+\.\S+/;
    if ((re.test(email)) === true && (password.length >= reqLenght)) {
      this.setState({
        isLoginValid: true,
      });
    } else {
      this.setState({
        isLoginValid: false,
      });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  sendDispatch() {
    const { email, password } = this.state;
    const { setUsernameAction, setPasswordAction } = this.props;
    setUsernameAction(email);
    setPasswordAction(password);
  }

  render() {
    const { isLoginValid } = this.state;
    return (
      <div>
        <h2>Página de Login</h2>
        <form>
          <label htmlFor="email-input">
            E-mail:
            <input
              type="email"
              name="email"
              required
              data-testid="email-input"
              onChange={ this.handleChange }
              onKeyUp={ this.validateEmail }
            />
            <br />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              type="password"
              name="password"
              required
              data-testid="password-input"
              onChange={ this.handleChange }
              onKeyUp={ this.validateEmail }
            />
            <br />
          </label>
          <Link to="/carteira">
            <button
              type="button"
              disabled={ !isLoginValid }
              onClick={ this.sendDispatch }
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
  setUsernameAction: (payload) => dispatch(setUsername(payload)),
  setPasswordAction: (payload) => dispatch(SetPassword(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
