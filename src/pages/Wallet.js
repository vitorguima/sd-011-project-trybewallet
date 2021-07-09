import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import fetchApi from '../services';
import { saveCurrency } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: [],
    };
    this.handleState = this.handleState.bind(this);
  }

  async componentDidMount() {
    const { saveObj } = this.props;
    const apiResponse = await fetchApi();
    const arrayOfCurrencies = Object.keys(apiResponse).map((element) => (
      apiResponse[element]))
      .filter(({ codein }) => codein !== 'BRLT');
    this.handleState(arrayOfCurrencies);
    saveObj(arrayOfCurrencies);
  }

  handleState(value) {
    this.setState(() => ({
      currency: value,
    }));
  }

  render() {
    const { email, total } = this.props;
    const { currency } = this.state;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">{ total.toFixed(2) }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <main>
          {currency.length > 0 && <ExpensesForm currencies={ currency } />}
          <ExpensesTable />
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  total: wallet.totalCalculed,
});

const mapDispatchToProps = (dispatch) => ({
  saveObj: (payload) => dispatch(saveCurrency(payload)),
});

Wallet.propTypes = ({
  email: PropTypes.string.isRequired,
  total: PropTypes.number,
  saveObj: PropTypes.func,
});

Wallet.defaultProps = ({
  total: 0,
  saveObj: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
