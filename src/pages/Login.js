import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import inputUser from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disable: true,
    };
    this.handleInputLogin = this.handleInputLogin.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
  }

  componentDidUpdate() {
    this.loginValidation();
  }

  loginValidation() {
    const { email, password, disable } = this.state;
    const characters = 6;
    const validationEmail = email.split('').includes('@')
      && email.split('.').includes('com');
    const validationPassword = password.length >= characters;
    if (validationEmail && validationPassword && disable) {
      this.setState({
        disable: false,
      });
    } else if ((!validationEmail || !validationPassword) && !disable) {
      this.setState({
        disable: true,
      });
    }
  }

  handleInputLogin({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password, disable } = this.state;
    const { dispatchInputUser } = this.props;
    return (
      <section>

        <div>Login</div>

        <div>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              data-testid="email-input"
              placeholder="Username"
              value={ email }
              onChange={ this.handleInputLogin }
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              name="password"
              data-testid="password-input"
              placeholder="Password"
              value={ password }
              onChange={ this.handleInputLogin }
            />
          </label>
        </div>

        <Link to="/carteira">
          <button
            type="button"
            disabled={ disable }
            onClick={ () => dispatchInputUser(email) }
          >
            Entrar
          </button>
        </Link>

      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchInputUser: (email) => dispatch(inputUser(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  dispatchInputUser: PropTypes.func,
}.isRequired;
