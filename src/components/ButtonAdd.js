import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setArrayExpenses, fetchCurrencie } from '../actions';

class ButtonAdd extends Component {
  constructor() {
    super();
    this.sendExpenses = this.sendExpenses.bind(this);
  }

  async sendExpenses() {
    const { newCurrencie, propsForm, getCurrency } = this.props;
    const { payload } = await getCurrency();

    const newvalue = {
      ...propsForm,
      exchangeRates: payload,
    };
    newCurrencie(newvalue);
  }

  render() {
    return (
      <button type="button" onClick={ this.sendExpenses }>Adicionar despesa</button>
    );
  }
}

const mapDispatchProps = (dispach) => ({
  newCurrencie: (value) => dispach(setArrayExpenses(value)),
  getCurrency: () => dispach(fetchCurrencie()),
});

export default connect(null, mapDispatchProps)(ButtonAdd);

ButtonAdd.propTypes = {
  newCurrencie: PropTypes.func.isRequired,
  getCurrency: PropTypes.func.isRequired,
  propsForm: PropTypes.shape({
    value: PropTypes.string,
    dc: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
};
