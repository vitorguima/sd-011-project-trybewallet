import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrencies } from '../actions';
import { GlobalContext } from '../GlobalContext';

const SelectCurrency = () => {
  const { providerValues } = React.useContext(GlobalContext);
  const [currencies, setCurrencies] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchData() {
      const { payload } = await dispatch(fetchCurrencies());
      const arrayPayload = Object.keys(payload);
      const arrayOfCurrencies = [];
      arrayPayload.map((currency) => (
        currency !== 'USDT' && arrayOfCurrencies.push(currency)
      ));
      setCurrencies(arrayOfCurrencies);
    }
    fetchData();
  }, [dispatch]);

  function handleChange({ target }) {
    providerValues.setCurrency(target.value);
  }

  return (
    <div>
      <label htmlFor="moeda">
        Moeda:
        <select
          name="moeda"
          id="moeda"
          onChange={ handleChange }
        >
          {currencies.map((currency, index) => (
            <option key={ index }>{ currency }</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectCurrency;
