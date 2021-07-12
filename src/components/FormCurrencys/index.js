import React from 'react';

import PropTypes from 'prop-types';
import { filteredCurrencys } from '../../services';

class FormCurrencys extends React.Component {
  constructor() {
    super();

    this.state = {
      currencys: [],
    };

    this.setCurrecysInState = this.setCurrecysInState.bind(this);
  }

  async componentDidMount() {
    const currencysTypes = await filteredCurrencys();
    this.setCurrecysInState(currencysTypes);
  }

  setCurrecysInState(currencysTypes) {
    this.setState({
      currencys: currencysTypes,
    });
  }

  render() {
    const { currencys } = this.state;
    const { currency, onChange } = this.props;

    return (
      <label htmlFor="currencysType">
        Moeda:
        <select
          name="currency"
          id="currencysType"
          value={ currency }
          onChange={ onChange }
        >
          {
            currencys.map((anycurrency) => (
              <option key={ anycurrency }>
                { anycurrency }
              </option>))
          }
        </select>
      </label>
    );
  }
}

FormCurrencys.propTypes = {
  currency: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormCurrencys;
