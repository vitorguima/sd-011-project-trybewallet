import React from 'react';
import { connect } from 'react-redux'
import store from '../store'

class Wallet extends React.Component {
  renderHeader() {
    const { userEmail } = this.props;
    return(
      <header>
        <p data-testid="email-field">{ userEmail }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    )
  }

  render() {
    
    return (
      <div>
        { this.renderHeader() }
        <h3>TrybeWallet</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email
})

export default connect(mapStateToProps)(Wallet);

// export default Wallet;
