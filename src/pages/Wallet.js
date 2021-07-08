import React from 'react';
import { useDispatch } from 'react-redux';
import Header from '../component/Header';
import Input from '../component/Input';
import Textarea from '../component/TextArea';
import { fetchCurrencies } from '../actions';
import Select from '../component/Select';

const Wallet = () => {
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

  return (
    <main>
      <Header />
      <form>
        <Input label="Valor" type="number" id="valor" name="valor" />
        <Textarea label="Descrição" id="description" name="description" />
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            {currencies.map((currency, index) => (
              <option key={ index }>{ currency }</option>
            ))}
          </select>
        </label>
        <Select />
      </form>
    </main>
  );
};

export default Wallet;
