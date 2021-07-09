import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    console.log('Teste');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email-input">
            Login:
            <input
              value={ email }
              type="email"
              name="email"
              data-testid="email-input"
              placeholder="alguem@email.com"
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              value={ password }
              type="password"
              name="password"
              data-testid="password-input"
              placeholder="digite sua senha"
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <div>
            <Link to="/carteira">
              <button
                type="button"
                onClick={ (e) => this.handleSubmit(e) }
                disabled={ !this.validateMail() } // - Req.2 a função começa desabilitada
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

export default LoginForm;

// Foi criado o formulário do requisito 1.
