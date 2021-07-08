import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestExpense, handleExpenseForm } from '../actions';
import paymentMethods from '../data/paymentMethods';
import tags from '../data/tags';

class WalletForm extends React.Component {
  render() {
    const { coins, form, requestExpenseInfo, handleExpenseFormInputs } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            name="value"
            onChange={ handleExpenseFormInputs }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
            onChange={ handleExpenseFormInputs }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency" onChange={ handleExpenseFormInputs }>
            { coins && coins.map((coin) => (
              <option key={ coin }>{ coin }</option>)) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select name="method" id="method" onChange={ handleExpenseFormInputs }>
            { paymentMethods.map((method) => <option key={ method }>{method}</option>) }
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag" onChange={ handleExpenseFormInputs }>
            { tags.map((tag) => <option key={ tag }>{tag}</option>)}
          </select>
        </label>
        <button
          type="button"
          onClick={ () => requestExpenseInfo(form) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  coins: state.wallet.coins,
  expenses: state.wallet.expenses,
  form: state.form,
});

const mapDispatchToProps = (dispatch) => ({
  requestExpenseInfo: (expenseEntries) => dispatch(requestExpense(expenseEntries)),
  handleExpenseFormInputs: ({ target }) => dispatch(handleExpenseForm(target)),
});

WalletForm.propTypes = {
  handleExpenseFormInputs: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf(PropTypes.string),
  requestExpenseInfo: PropTypes.func.isRequired,
  form: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.number,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
};

WalletForm.defaultProps = {
  coins: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
