import React from 'react';
import Header from '../component/Header';
import Input from '../component/Input';
import Textarea from '../component/TextArea';
import Table from '../component/Table';
import SelectCurrency from '../component/SelectCurrency';
import ButtonAdd from '../component/ButtonAdd';
import SelectTag from '../component/SelectTag';
import SelectMethod from '../component/SelectMethod';
import { GlobalStorage } from '../GlobalContext';

function Wallet() {
  return (
    <GlobalStorage>
      <Header />
      <form>
        <Input
          label="Valor"
          type="number"
          id="valor"
          name="valor"
        />
        <Textarea label="Descrição" id="description" name="description" />
        <SelectCurrency />
        <SelectTag />
        <SelectMethod />
        <ButtonAdd />
      </form>
      <Table />
    </GlobalStorage>
  );
}

export default Wallet;
