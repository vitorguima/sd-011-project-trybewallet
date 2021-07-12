import React from 'react';
import { connect } from 'react-redux';
// import store from '../store';

class Expenses extends React.Component {
  render() {
    const { expensesTotal } = this.props;
    return (
      <section
        data-testid="total-field"
      >
        Despesas Totais:
        {' '}
        {expensesTotal}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesTotal: state.wallet.expensesTotal,
});

export default connect(mapStateToProps)(Expenses);
