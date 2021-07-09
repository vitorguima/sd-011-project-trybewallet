import React, { Component } from 'react';
import Logo from '../Images/logo.png';

class Header extends Component {
  render() {
    return (
      <div>
        <img alt="logo" src={ Logo } width="150px" height="50px" />
      </div>
    );
  }
}

export default Header;
