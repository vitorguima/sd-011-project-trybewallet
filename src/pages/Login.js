import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };
  }

  render() {
    function btnState() {
      const form = document.getElementById('login-form');
      const btnSubmit = document.getElementById('submit-btn');
      btnSubmit.disabled = !form.checkValidity();
    }
    const { dispatchEmail } = this.props;
    const { email } = this.state;
    return (
      <div>
        <form id="login-form" onChange={ btnState }>
          <label htmlFor="login-email">
            Login
            <input
              type="email"
              data-testid="email-input"
              className="login-email"
              required
              onChange={ (e) => this.setState({ email: e.target.value }) }
            />
          </label>
          <label htmlFor="login-pass">
            Senha
            <input
              type="password"
              data-testid="password-input"
              className="login-pass"
              minLength="6"
              required
            />
          </label>
          <Link to="/carteira">
            <button
              type="submit"
              id="submit-btn"
              onClick={ dispatchEmail(email) }
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
  dispatchEmail: (email) => dispatch(userEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  dispatchEmail: PropTypes.func.isRequired,
};
