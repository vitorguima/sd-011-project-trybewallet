import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import FormWallet from '../components/FormWallet';
import NavWallet from '../components/NavWallet';
import { setCurrencies } from '../actions';

function Wallet() {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const dispatch = useDispatch();
  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const { data } = await axios.get(url);
        dispatch(setCurrencies(data));
      } catch (error) {
        console.log('ERR', error);
      }
    };
    getCurrencies();
  }, []);
  return (
    <div>
      <NavWallet />
      <FormWallet />
    </div>
  );
}

export default Wallet;
