import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Expense extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <h1> Despesas </h1>
        { expenses.map((expense, index) => (
          <div className="div" key={ index } value={ expense.fieldValor }>
            <h1>{ expense.fieldValor }</h1>
            <h2>{ expense.fieldDescricao }</h2>
            <h1>{ expense.fieldTag }</h1>
          </div>))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Expense);

Expense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
