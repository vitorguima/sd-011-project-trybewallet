import React from 'react';

class Layout extends React.Component {
  componentDidMount() {
    document.title = 'Trybe Wallet';
  }

  render() {
    const { children } = this.props;

    return (
      <>
        <header>
          <h1>Trybe Wallet</h1>
        </header>
        { children }
        <footer>Trybe Wallet por <a href="https://github.com/heyset">Matheus "Set" Inacio</a></footer>
      </>
    );
  }
}

export default Layout;
