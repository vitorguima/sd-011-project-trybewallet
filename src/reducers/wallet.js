import { SUBMIT_EXPENSE,
  REQUEST_API,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  SUBMIT_EDIT,
} from '../actions/index';

const INITIAL_STATE = {
  idToEdit: false,
  loading: false,
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { type, nextId, value, description, currency, payment, tag, exchangeRates,
    loading,
    filteredExpenses,
    idToEdit,
    editedExpenses,
  } = action;
  switch (type) {
  case SUBMIT_EXPENSE:
    return { ...state,
      loading,
      expenses: [
        ...state.expenses,
        {
          id: nextId,
          value,
          description,
          currency,
          method: payment,
          tag,
          exchangeRates,
        },
      ],
    };
  case REQUEST_API:
    return { ...state,
      loading,
    };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: filteredExpenses,
    };
  case EDIT_EXPENSE:
    return { ...state,
      idToEdit,
    };
  case SUBMIT_EDIT:
    return { ...state,
      idToEdit: false,
      expenses: editedExpenses,
    };
  default:
    return state;
  }
}

export default wallet;
