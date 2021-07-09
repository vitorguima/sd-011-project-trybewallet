import React from 'react';

class Layout extends React.Component {
  componentDidMount() {
    const { title } = this.props;

    document.title = `${title ? `${title} | ` : ''}Trybe Wallet`;
  }

  render() {
    const { children } = this.props;

    return (
      <>
        <header>
          <h1>Trybe Wallet</h1>
        </header>
        { children }
        <footer>
          <p>
            Trybe Wallet por <a href="https://github.com/heyset">Matheus "Set" Inacio</a>
          </p>
        </footer>
      </>
    );
  }
}

export default Layout;
