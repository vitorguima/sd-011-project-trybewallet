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

    this.btnState = this.btnState.bind(this);
  }

  btnState() {
    const form = document.getElementById('login-form');
    const btnSubmit = document.getElementById('submit-btn');
    btnSubmit.disabled = !form.checkValidity();
  }

  render() {
    const { dispatchEmail } = this.props;
    const { email } = this.state;

    return (
      <div>
        <form id="login-form" onChange={ this.btnState }>
          <div>
            <label htmlFor="login-email" className="form-label">
              Login
              <input
                autoComplete="off"
                className="form-control login-email"
                name="email"
                type="email"
                data-testid="email-input"
                required
                onChange={ (e) => this.setState({ email: e.target.value }) }
              />
            </label>
          </div>
          <div>
            <label htmlFor="login-pass">
              Senha
              <input
                type="password"
                data-testid="password-input"
                className="login-pass"
                pattern=".{6,}"
                required
              />
            </label>
          </div>
          <div>
            <Link to="/carteira">
              <button
                type="button"
                id="submit-btn"
                onClick={ dispatchEmail(email) } // se mudar para arrow para o erro mas quebra o teste
                disabled
              >
                Entrar
              </button>
            </Link>
          </div>
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
