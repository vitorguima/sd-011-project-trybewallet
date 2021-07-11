import React from 'react';

import fetchCurrencys from '../../services';

class FormCurrencys extends React.Component {
  constructor() {
    super();

    this.state = {
      currencys: [],
    };

    this.setCurrecysInState = this.setCurrecysInState.bind(this);
  }

  async componentDidMount() {
    console.log('componentDidMontou');
    const currencysTypes = await fetchCurrencys();
    this.setCurrecysInState(currencysTypes);
  }

  setCurrecysInState(currencysTypes) {
    this.setState({
      currencys: currencysTypes,
    });
  }

  render() {
    const { currencys } = this.state;

    return (
      <label htmlFor="currencysType">
        <select name="currencysType">
          {
            currencys.map((currency) => (
              <option key={ currency }>
                { currency }
              </option>))
          }
        </select>
      </label>
    );
  }
}

export default FormCurrencys;
