import React, { Component } from 'react';
import ValueInput from './ValueInput';
import DescriptionInput from './DescriptionInput';
import CurrencyInput from './CurrencyInput';
import PaymentMethod from './PaymentMethod';
import ExpenseCategory from './ExpenseCategory';

export default class Form extends Component {
  render() {
    return (
      <form className="form-container">
        <fieldset className="fieldset-container">
          <ValueInput />
          <DescriptionInput />
          <CurrencyInput />
          <PaymentMethod />
          <ExpenseCategory />
        </fieldset>
      </form>
    );
  }
}
