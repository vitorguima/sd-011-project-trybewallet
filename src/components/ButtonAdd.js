import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setArrayExpenses } from '../actions';

class ButtonAdd extends Component {
  constructor() {
    super();
    this.sendExpenses = this.sendExpenses.bind(this);
  }

  sendExpenses() {
    const { newCurrencie, propsForm, stateExpense } = this.props;
    const newvalue = {
      ...propsForm,
      exchangeRates: { ...stateExpense },
    };
    newCurrencie(newvalue);
  }

  render() {
    return (
      <button type="button" onClick={ this.sendExpenses }>Adicionar despesa</button>
    );
  }
}

const mapStatetoProps = (state) => ({
  stateExpense: state.wallet.currencies,
});

const mapDispatchProps = (dispach) => ({
  newCurrencie: (value) => dispach(setArrayExpenses(value)),
});

export default connect(mapStatetoProps, mapDispatchProps)(ButtonAdd);

ButtonAdd.defaultProps = {
  stateExpense: {},
};

ButtonAdd.propTypes = {
  newCurrencie: PropTypes.func.isRequired,
  stateExpense: PropTypes.objectOf(PropTypes.object),
  propsForm: PropTypes.shape({
    value: PropTypes.string,
    dc: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
};
