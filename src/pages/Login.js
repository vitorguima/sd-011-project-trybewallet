import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newUser } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      pass: '',
    };

    this.changeState = this.changeState.bind(this);
    this.canSubmit = this.canSubmit.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  changeState({ target }) {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }));
  }

  canSubmit() {
    const { email, pass } = this.state;
    const filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const minPassLen = 6;
    return ((email.length > 0 && filter.test(email)) && pass.length >= minPassLen);
  }

  handleButton(event) {
    event.preventDefault();
    const { emailDispatch, history } = this.props;
    const { email } = this.state;

    emailDispatch(email);
    history.push('/carteira');
  }

  render() {
    const isEnabled = this.canSubmit();

    return (
      <div>
        <form id="login-cont">
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.changeState }
          />
          <input
            type="password"
            name="pass"
            data-testid="password-input"
            onChange={ this.changeState }
          />
          <button
            type="submit"
            disabled={ !isEnabled }
            onClick={ this.handleButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (state) => dispatch(newUser(state)) });

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
