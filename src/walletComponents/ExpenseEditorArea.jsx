import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  expenses,
  description,
  currency,
  paymentMethod,
  category,
} from './walletElements';

class ExpenseEditorArea extends Component {
  constructor(props) {
    super(props);
    this.handlerInputChange = this.handlerInputChange.bind(this);
  }

  renderInputs() {
    const { currencies } = this.props;
    return (
      <>
        {expenses(this.handlerInputChange)}
        {description(this.handlerInputChange)}
        {currency(currencies, this.handlerInputChange)}
        {paymentMethod(this.handlerInputChange)}
        {category(this.handlerInputChange)}
        <button type="button" data-testid="edit-btn">Editar despesa</button>
      </>
    );
  }

  render() {
    const { currencies, editID } = this.props;

    return (
      <form>
        {this.renderInputs()}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  editID: state.wallet.editID,
});

export default connect(mapStateToProps)(ExpenseEditorArea);
