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
    const { email, authorization } = this.props;
    const { currency } = this.state;
    return (
      <div>
        { authorization && <Redirect to="/" /> }
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <main>
          { console.log(currency) }
          {currency.length > 0 && <ExpensesForm currencies={ currency } />
}
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  email: user.email,
  authorization: user.authorization,
});

Wallet.propTypes = ({
  email: PropTypes.string.isRequired,
  authorization: PropTypes.bool.isRequired,
});

export default connect(mapStateToProps)(Wallet);
