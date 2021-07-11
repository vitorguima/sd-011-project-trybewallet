import React from 'react';
import store from '../store';

class Header extends React.Component {
  render() {
    return (
      <header
        data-testid="email-field"
      >
        {store.getState().user.email}
      </header>
    );
  }
}

export default Header;
