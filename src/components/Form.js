import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalExpenses: 0 };
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  componentDidMount() {
    this.totalExpenses();
  }

  totalExpenses() {
    const { walletExpenses } = this.props;
    const total = walletExpenses.reduce((acc, curr) => acc + curr, 0);
    this.setState({
      totalExpenses: total,
    });
  }

  render() {
    const { userEmail } = this.props;
    const { totalExpenses } = this.state;
    return (
      <div>
        <div data-testid="email-field">
          Email:
          {' '}
          {userEmail}
        </div>
        <section data-testid="total-field">
          Total:
          {' '}
          { totalExpenses }
        </section>
        <section data-testid="header-currency-field">
          Moeda atual:BRL
        </section>
      </div>
    );
  }
}

Form.propTypes = {
  userEmail: PropTypes.string.isRequired,
  walletExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  walletExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Form);
