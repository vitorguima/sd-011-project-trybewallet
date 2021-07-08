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

    this.isDisabled = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    const { email, password } = this.state;
    const pattern = /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i;
    const minPasswordLength = 6;
    this.setState = ({
      [name]: value,
      isDisabled: !pattern.test(email) || password.length <= minPasswordLength,
    });
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
