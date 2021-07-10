import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
      redirect: false,
    };

    this.handlerInput = this.handlerInput.bind(this);
    this.verifyCredentials = this.verifyCredentials.bind(this);
    this.sendToWallet = this.sendToWallet.bind(this);
  }

  handlerInput({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => this.verifyCredentials());
  }

  verifyCredentials() {
    /** Para realizar o uso de verificação do email, tive que usar o regex pattern
     * para verificação de email abaixo:
     * Source: https://forum.blip.ai/t/resolvido-regex-para-validacao-de-email/1635 */
    const emailPattern = /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/;
    const { email, password } = this.state;
    const emailCheck = emailPattern.test(email);
    const passwordLength = 6;

    if (emailCheck && password.length >= passwordLength) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  sendToWallet() {
    const { user } = this.props;
    const { email } = this.state;
    user(email);

    this.setState({
      redirect: true,
    });
  }

  render() {
    const { disabled, redirect } = this.state;

    return (
      <div className="login-area">
        <label htmlFor="email">
          <input
            // https://code.tutsplus.com/tutorials/form-input-validation-using-only-html5-and-regex--cms-33095
            type="text"
            name="email"
            data-testid="email-input"
            placeholder="Digite seu email"
            onChange={ (value) => this.handlerInput(value) }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Insira sua senha"
            onChange={ (value) => this.handlerInput(value) }
          />
        </label>
        <button
          type="submit"
          disabled={ disabled }
          onClick={ () => this.sendToWallet() }
        >
          Entrar
        </button>
        { redirect && <Redirect to="/carteira" /> }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (email) => dispatch(saveEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  user: PropTypes.func.isRequired,
};
