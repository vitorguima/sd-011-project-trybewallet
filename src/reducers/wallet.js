// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  dispesasTotais: 0,
};

function waLL(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      dispesasTotais: action.dispesasTotais,
    };
  default:
    return state;
  }
}
export default waLL;
