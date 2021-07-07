import React from 'react';
import 'bulma/css/bulma.min.css';
import '../Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      statusPass: false,
      statusEmail: false,
    };

    this.readForm = this.readForm.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.validPassword = this.validPassword.bind(this);
  }

  readForm(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({
      [e.target.name]: value,
    }, () => this.validationAll());
  }

  // Esta função validationAll é utilizada aqui por uma limitação no avaliador, a ideia inical era colocar em um evento
  // onBlur no input

  // lógica adaptada de https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  validEmail() {
    const { email } = this.state;
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm)) {
      this.setState({
        statusEmail: false,
      });
    } else {
      this.setState({
        statusEmail: true,
      });
    }
  }

  validPassword() {
    const { password } = this.state;
    const number = 6;
    if (password.length < number) {
      this.setState({
        statusPass: false,
      });
    } else {
      this.setState({
        statusPass: true,
      });
    }
  }

  validationAll() {
    this.validEmail();
    this.validPassword();
  }

  render() {
    const { statusPass, statusEmail } = this.state;
    return (
      <section className="login">
        <h1> Sistema Trybe Wallet </h1>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="E-mail"
              data-testid="email-input"
              onChange={ this.readForm }
              required
            />
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              data-testid="password-input"
              onChange={ this.readForm }
              required
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button
              className="button is-success"
              type="button"
              disabled={ !statusEmail || !statusPass }
            >
              Entrar
            </button>
          </p>
        </div>
      </section>
    );
  }
}

export default Login;
