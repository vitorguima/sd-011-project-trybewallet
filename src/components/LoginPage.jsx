import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userAction from '../actions';

class LoginPage extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.addTaskOnStore = this.addTaskOnStore.bind(this);

    this.state = {
      email: '',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  addTaskOnStore() {
    const { email } = this.state;
    const { addEmail } = this.props;

    addEmail(email);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="input-email">
            Email:
            <input
              data-testid="email-input"
              type="email"
              placeholder="Digite seu email..."
              name="email"
              id="input-email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input-password">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              placeholder="Digite sua senha..."
              id="input-password"
            />
          </label>
        </form>
        <button
          type="button"
          onClick={ this.addTaskOnStore }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(userAction.addEmail(email)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
