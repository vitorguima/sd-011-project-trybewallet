import React from 'react';
import { Layout } from '../components';

import withStore from '../utils/withStore';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <Layout title="Minha Carteira">
        <header>
          <h1>Minha carteira</h1>
          <p>
            Logado como:
            <span data-testid="email-field">
              { user.email }
            </span>
          </p>
          <p>
            Gasto total:
            <span data-testid="total-field">
              0
            </span>
          </p>
          <p>
            Câmbio realizado para:
            <span data-testid="header-currency-field">
              BRL
            </span>
          </p>
        </header>
        <main>
          opa
        </main>
      </Layout>
    );
  }
}

export default withStore(Wallet, ['user']);
