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
          <div className="div" key={ index } value={ expense.valor }>
            <h1>{ expense.valor }</h1>
            <h2>{ expense.descricao }</h2>
            <h1>{ expense.tag }</h1>
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
