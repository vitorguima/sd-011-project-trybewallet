import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ExpensesForm from '../components/ExpensesForm';
import fetchApi from '../services';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: [],
    };
    this.handleState = this.handleState.bind(this);
  }

  async componentDidMount() {
    const apiResponse = await fetchApi();
    this.handleState(apiResponse);
  }

  handleState(value) {
    const arrayOfCurrencies = Object.keys(value).map((element) => value[element])
      .filter(({ codein }) => codein !== 'BRLT');
    this.setState(() => ({
      currency: arrayOfCurrencies,
    }));
  }

  render() {
    const { email, authorization, total } = this.props;
    const { currency } = this.state;
    return (
      <div>
        { authorization && <Redirect to="/" /> }
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">{ total }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <main>
          {currency.length > 0 && <ExpensesForm currencies={ currency } />}
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  authorization: user.authorization,
  total: wallet.totalCalculed,
});

Wallet.propTypes = ({
  email: PropTypes.string.isRequired,
  authorization: PropTypes.bool,
  total: PropTypes.number,
});

Wallet.defaultProps = ({
  total: 0,
  authorization: false,
});

export default connect(mapStateToProps)(Wallet);
