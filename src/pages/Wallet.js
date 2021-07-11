import React, { useEffect } from 'react';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
import FormWallet from '../components/FormWallet';
import NavWallet from '../components/NavWallet';
// import { fetchCurrencies } from '../actions';

function Wallet() {
  const [currencies, setCurrencies] = React.useState([]);
  const url = 'https://economia.awesomeapi.com.br/json/all';
  // const dispatch = useDispatch();
  console.log(currencies);
  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const { data } = await axios.get(url);
        setCurrencies(data);
        delete data.USDT;
      } catch (error) {
        console.log('ERR', error);
      }
    };
    getCurrencies();
  }, []);
  return (
    <div>
      <NavWallet />
      <FormWallet currencies={ currencies } />
    </div>
  );
}

export default Wallet;
