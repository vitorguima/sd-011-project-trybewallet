import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      habilitar: false,
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validateSenha = this.validateSenha.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });

    const { email, senha } = this.state;

    if (name === 'email' || name === 'senha') {
      const emailVar = (name === 'email' ? value : email);
      const senhaVar = (name === 'senha' ? value : senha);
      this.setState({ habilitar: (this.validateEmail(emailVar)
      && this.validateSenha(senhaVar)) });
    }
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  validateSenha(senha) {
    const tamanhoSenha = 5;
    if (senha.length > tamanhoSenha) {
      return true;
    }
    return false;
  }

  render() {
    const { userLogin } = this.props;
    const { email, senha, habilitar } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            data-testid="email-input"
            name="email"
            type="text"
            onChange={ this.handleChange }
            value={ email }
            required
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            id="senha"
            data-testid="password-input"
            name="senha"
            type="text"
            minLength="6"
            onChange={ this.handleChange }
            value={ senha }
            required
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !habilitar }
            onClick={ () => userLogin(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (email) => dispatch(login(email)) });

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};
