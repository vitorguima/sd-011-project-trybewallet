import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.min.css';
import Valor from './components/Valor';
import Descrição from './components/Descricao';
import Moeda from './components/Moeda';
import Pagamento from './components/Pagamento';
import Tag from './components/Tag';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <section>
        <header>
          <h1 className="title">TrybeWallet</h1>
          <h3 data-testid="email-field">
            { email }
          </h3>
          <h2 data-testid="total-field">
            0
          </h2>
          <h2 data-testid="header-currency-field">
            BRL
          </h2>
        </header>
        <form>
          <Valor />
          <Descrição />
          <Moeda />
          <Pagamento />
          <Tag />
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
