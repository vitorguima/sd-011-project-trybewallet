import React from 'react';
import store from '../store';

class Header extends React.Component {
  render() {
    return (
      <header>
        <p data-testid="email-field">
          {store.getState().user.email}
        </p>

      </header>
    );
  }
}

export default Header;
