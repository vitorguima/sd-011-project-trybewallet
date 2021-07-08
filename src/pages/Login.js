import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisable: true,
    };
    this.validateLogin = this.validateLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateLogin() {
    const { email, password } = this.state;
    const numeroMinPassword = 6;
    if ((email.includes('@' && '.com')) && (password.length >= numeroMinPassword)) {
      this.setState({
        isDisable: false,
      });
    }
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.validateLogin());
  } // Lembrar que o setstate possui 2 parametros 1º state 2º callback, nese caso de validação é preciso usar o 2º parametro. setState é uma função assincrona só vai executar somente quando o 1º parametro for finalizado já atribuito o novo state

  submitEmail(param1) {
    const { submit, history } = this.props;
    submit(param1);
    history.push('/carteira');
  }

  render() {
    const { isDisable, password, email } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email">
          <input
            name="email"
            value={ email }
            data-testid="email-input"
            type="text"
            placeholder="Digite seu Email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-password">
          <input
            name="password"
            value={ password }
            data-testid="password-input"
            type="password"
            placeholder="Digite seu Password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ isDisable }
          onClick={ () => this.submitEmail(email) }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  submit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submit: (email) => dispatch(loginEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
