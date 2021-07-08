import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      // isDisable: true,
    };
    this.emailValid = this.emailValid.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  emailValid() {
    const { password, email } = this.state;
    const re = /\S+@\S+\.\S+/;
    const magicNumber = 6;
    if (re.test(email) && password.length >= magicNumber) {
      return false;
    }
    return true;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { sendEmail } = this.props;
    return (
      <div>
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            name="email"
            value={ email }
            type="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="password-input"
            name="password"
            value={ password }
            type="password"
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ this.emailValid() }
            onClick={ () => sendEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (payload) => dispatch(userEmail(payload)),
});

Login.propTypes = ({
  sendEmail: PropTypes.func,
}).isRequired;

export default connect(null, mapDispatchToProps)(Login);
