import { EDT_EXPENSE } from '../reducers/wallet';

function edtExpense(id) {
  return {
    type: EDT_EXPENSE,
    payload: id,
  };
}

export default edtExpense;
