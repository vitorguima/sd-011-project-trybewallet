import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestExpense } from '../actions';

class WalletForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: -1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleExpenseFormInputs = this.handleExpenseFormInputs.bind(this);
    this.requestExpenseData = this.requestExpenseData.bind(this);
  }

  handleExpenseFormInputs({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  requestExpenseData() {
    const { requestExpenseInfo } = this.props;
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }),
    () => requestExpenseInfo(this.state));
  }

  render() {
    const { coins } = this.props;
    return (
      <form>
        <label htmlFor="value"> Valor:</label>
        <input
          type="number"
          id="value"
          name="value"
          onChange={ this.handleExpenseFormInputs }
        />
        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={ this.handleExpenseFormInputs }
        />
        <label htmlFor="currency">Moeda:</label>
        <select name="currency" id="currency" onChange={ this.handleExpenseFormInputs }>
          { coins && coins.map((coin) => (
            <option key={ coin }>{ coin }</option>)) }
        </select>
        <label htmlFor="method">
          Método de pagamento:
        </label>
        <select name="method" id="method" onChange={ this.handleExpenseFormInputs }>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <label htmlFor="tag">Tag:</label>
        <select name="tag" id="tag" onChange={ this.handleExpenseFormInputs }>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        <button
          type="button"
          onClick={ () => this.requestExpenseData() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  coins: state.wallet.coins,
});

const mapDispatchToProps = (dispatch) => ({
  requestExpenseInfo: (expenseEntries) => dispatch(requestExpense(expenseEntries)),
});

WalletForm.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string),
  requestExpenseInfo: PropTypes.func.isRequired,
};

WalletForm.defaultProps = {
  coins: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
