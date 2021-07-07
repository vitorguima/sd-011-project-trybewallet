import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserEmail } from '../actions/userActions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.ableButton = this.ableButton.bind(this);
  }

  handleChanges({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  // Para esta etapa eu utilizei como base as informações abaixo:
  // Fonte: https://stackoverflow.com/questions/59625783/regular-expression-validation-in-react-js-for-input
  // Fonte: https://stackoverflow.com/questions/39356826/how-to-check-if-it-a-text-input-has-a-valid-email-format-in-reactjs/39425165
  ableButton() {
    const { email, password } = this.state;
    const regexEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    const minPassword = 6;
    if (password.length >= minPassword && regexEmail.test(email)) {
      return false;
    } return true;
  }

  render() {
    const { email, password } = this.state;
    const { userAction } = this.props;
    return (
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="email-input">
            <input
              data-testid="email-input"
              onChange={ this.handleChanges }
              placeholder="Insira o seu email"
              type="text"
              name="email"
              value={ email }
            />
          </label>
          <label htmlFor="password-input">
            <input
              data-testid="password-input"
              onChange={ this.handleChanges }
              placeholder="Insira a sua senha"
              type="password"
              name="password"
              value={ password }
            />
          </label>
          <Link to="/carteira">
            <button
              type="button"
              disabled={ this.ableButton() }
              onClick={ () => userAction(email) }
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
  userAction: (payload) => dispatch(getUserEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  userAction: PropTypes.func.isRequired,
};
