import React, { Component } from 'react';

class ButtonAdd extends Component {
  constructor() {
    super();
    this.sendExpenses = this.sendExpenses.bind(this);
  }

  sendExpenses() {
    console.log('ok');
  }

  render() {
    return (
      <button type="button" onClick={ this.sendExpenses }>Adicionar despesa</button>
    );
  }
}

export default ButtonAdd;
