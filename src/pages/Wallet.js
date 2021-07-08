import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormOne from '../components/FormOne';
import FormTwo from '../components/FormTwo';
import FormThree from '../components/FormThree';
import { expenseAction } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      description: '',
      moeda: [],
      pagamento: '',
      tag: '',
    };
    this.handleState = this.handleState.bind(this);
  }

  handleState({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
    console.log(target.value, target.name);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          <FormOne handleState={ this.handleState } />
          <FormTwo handleState={ this.handleState } />
          <FormThree handleState={ this.handleState } />
        </form>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  sendExpense: (expense) => dispatch(expenseAction(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
