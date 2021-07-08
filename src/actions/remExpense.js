import { REM_EXPENSE } from '../reducers/wallet';

function remExpense(id) {
  return {
    type: REM_EXPENSE,
    payload: id,
  };
}

export default remExpense;
