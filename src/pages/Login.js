import React from 'react';
import { connect } from 'react-redux';
import './Style.css';
import { Redirect } from 'react-router-dom';
import { saveEmail } from '../actions/index';

const minPassword = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isRedirected: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.confirmedEmail = this.confirmedEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // peguei uma dica de como autenticar email no stackoverflow
  // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  confirmedEmail(email) {
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return emailPattern.test(email);
  }

  // confirmedPassword() {
  //   const passwordPattern =
  // }
  handleClick() {
    const { email } = this.state;
    const { user } = this.props;
    user(email);
    this.setState({
      isRedirected: true,
    });
  }

  buttonLogin() {
    const { email, password } = this.state;

    if (email.length <= 0 || password.length < minPassword
        || !this.confirmedEmail(email)) {
      return <button type="button" disabled>Entrar</button>;
    }
    return <button type="button" onClick={ this.handleClick }>Entrar</button>;
  }

  render() {
    const { email, password, isRedirected } = this.state;

    return (
      <div className="bodyLogin">
        <h2>Trybe Wallet</h2>
        <input
          className="inputEmail"
          value={ email }
          type="email"
          name="email"
          placeholder="E-mail"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          className="inputPassword"
          minLength="6"
          value={ password }
          type="password"
          name="password"
          placeholder="Senha"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <div className="buttonLogin">
          {this.buttonLogin()}
        </div>
        { isRedirected && <Redirect to="/carteira" /> }
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (email) => dispatch(saveEmail(email)),
});
export default connect(null, mapDispatchToProps)(Login);
