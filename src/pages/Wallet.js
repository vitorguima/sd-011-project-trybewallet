import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import 'bulma/css/bulma.min.css';
import Valor from './components/Valor';
import Descrição from './components/Descricao';
import Moeda from './components/Moeda';
import Pagamento from './components/Pagamento';
import Tag from './components/Tag';
import * as actions from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: [],
    };

    this.readInput = this.readInput.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  readInput(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  sendData() {
    const { saveExpenses } = this.props;
    return saveExpenses(this.state);
  }

  render() {
    const { email } = this.props;
    return (
      <section>
        <header>
          <h1 className="title">TrybeWallet</h1>
          <h3 data-testid="email-field">
            { email }
          </h3>
          <h2 data-testid="total-field">
            0
          </h2>
          <h2 data-testid="header-currency-field">
            BRL
          </h2>
        </header>
        <form id="myform">
          <Valor
            inputValue={ this.readInput }
          />
          <Descrição
            inputValue={ this.readInput }
          />
          <Moeda
            inputValue={ this.readInput }
          />
          <Pagamento
            inputValue={ this.readInput }
          />
          <Tag
            inputValue={ this.readInput }
          />
          <button
            type="button"
            onClick={ this.sendData }
          >
            Adicionar despesa
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (e) => dispatch(actions.saveExpenses(e)),
});

Wallet.propTypes = {
  email: PropTypes.string,
  saveExpenses: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
