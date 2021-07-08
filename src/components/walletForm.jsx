import React from 'react';
import ValueInput from './formComponents/valueInput';
import DescriptionInput from './formComponents/descriptionInput';
import CurrencySelect from './formComponents/currencySelect';
import MathodSelect from './formComponents/methodSelect';
import TagSelect from './formComponents/tagSelect';
import AddExpenseBtn from './addExpenseBtn';

const WalletForm = () => (
  <form>
    <ValueInput />
    <DescriptionInput />
    <CurrencySelect />
    <MathodSelect />
    <TagSelect />
    <AddExpenseBtn />
  </form>
);

export default WalletForm;
