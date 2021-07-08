import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    },
    () => this.handleEmailInput());
  }

  handleEmailInput() {
    const { email, password } = this.state;
    const pattern = /^\w+(\w+)@\w+([-.]\w+).\w+([-.]\w+)*$/;
    const minPasswordLength = 6;
    const bool = pattern.test(email) && password.length >= minPasswordLength;
    if (bool) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  render() {
    const { email, password, isDisabled } = this.state;
    const { getEmail } = this.props;
    return (
      <div>
        <h1>Login</h1>
        <form>

          <input
            type="email"
            data-testid="email-input"
            pattern="/^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />

          <input
            type="password"
            data-testid="password-input"
            min="6"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />

          <Link to="/carteira">
            <button
              type="submit"
              disabled={ isDisabled }
              onClick={ () => getEmail(email) }
            >
              Entrar
            </button>
          </Link>

        </form>
      </div>
    );
  }
}

Login.propTypes = ({
  getEmail: PropTypes.func.isRequired,
});

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(addEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
