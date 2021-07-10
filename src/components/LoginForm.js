import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newUser } from '../actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateMail = this.validateMail.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }
  // handleChange vai capturar o evento do logine e da senha

  validateMail() { // Req.2 - regex para habilitar ou desabilitar a tela inicial
    const { email, password } = this.state;
    const minCharacters = 6;
    const validate = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    if (validate && password.length >= minCharacters) {
      return true;
    } return false;
  }

  handleSubmit() {
    const { email } = this.state;
    const { emailStore } = this.props;
    emailStore(email);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email-input">
            Login:
            <input
              type="text"
              name="email"
              value={ email }
              placeholder="alguem@email.com"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              type="password"
              name="password"
              value={ password }
              data-testid="password-input"
              placeholder="digite sua senha"
              onChange={ this.handleChange }
            />
          </label>
          <div>
            <Link to="/carteira">
              <button
                type="button"
                disabled={ !this.validateMail() } // - Req.2 a função começa desabilitada
                onClick={ this.handleSubmit }
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
  emailStore: (email) => dispatch(newUser(email)),
});

// Req. 3 - mapDispatchToProps - vai mandar o e-mail logado para o estado global (store).

LoginForm.propTypes = {
  emailStore: PropTypes.string,
}.isRequired;

export default connect(null, mapDispatchToProps)(LoginForm);

// Foi criado o formulário do requisito 1.
