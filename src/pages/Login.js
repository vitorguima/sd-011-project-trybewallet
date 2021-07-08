import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import setUser from '../reducers/user';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disableEmail: true,
      disablePassword: true,
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+$/;
    return re.test(email);
  }

  handleEmail({ target: { value } }) {
    this.setState({ email: value });
    if (this.validateEmail(value)) {
      this.setState({ disableEmail: false });
    } else {
      this.setState({ disableEmail: true });
    }
  }

  handlePassword({ target: { value } }) {
    this.setState({ password: value });
    const numberFive = 5;
    if (value.length > numberFive) {
      this.setState({ disablePassword: false });
    } else {
      this.setState({ disablePassword: true });
    }
  }

  teste() {
    console.log('opa!');
  }

  render() {
    const { email, password, disableEmail, disablePassword } = this.state;
    const { setUserAction } = this.props;
    return (
      <form>
        <label data-testid="email-input" htmlFor="email">
          E-mail
          <input
            type="text"
            name="email"
            onChange={ this.handleEmail }
            value={ email }
          />
        </label>
        <label data-testid="password-input" htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            onChange={ this.handlePassword }
            value={ password }
          />
        </label>
        <button
          type="button"
          onClick={ () => setUserAction(email, password) }
          disabled={ !!disableEmail || !!disablePassword }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserAction: (email, password) => dispatch(setUser(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = ({
  setUserAction: PropTypes.func.isRequired,
});
