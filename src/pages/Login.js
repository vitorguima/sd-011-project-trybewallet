import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passaword: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  buttonLogin() {
    const { email, passaword } = this.state;
    const emailValid = /\S+@\S+\.\S+/;
    const passawordCharacters = 6;
    if (emailValid.test(email) === true && passaword.length >= passawordCharacters) {
      return false;
    }
    return true;
  }

  render() {
    const { email } = this.state;
    const { reducerLogin } = this.props;
    return (
      <div>
        <header>Trybe Wallet</header>
        <div className="div">
          <form>
            <label htmlFor="email-imput">
              Email
              <input
                type="text"
                name="email"
                data-testid="email-input"
                onChange={ this.handleChange }
                placeholder="E-mail"
              />
            </label>

            <label htmlFor="password-input">
              Senha
              <input
                type="text"
                name="passaword"
                data-testid="password-input"
                onChange={ this.handleChange }
                placeholder="Passaword"
              />
            </label>

            <button
              type="button"
              disabled={ this.buttonLogin() }
              onClick={ () => reducerLogin({ email }) }
            >
              <Link to="/carteira">
                Entrar
              </Link>
            </button>
          </form>
        </div>
        <footer>Desenvolvido por Leandro Lopes</footer>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  reducerLogin: (email) => dispatch(login(email)),
});

Login.propTypes = {
  reducerLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
