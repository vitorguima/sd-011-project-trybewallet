// Esse reducer será responsável por tratar as informações da pessoa usuária, vai vir configurado por padrão email vazio.

const INITIAL_STATE = { email: '' };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TONEWUSER':
    return {
      ...state,
      email: action.email,
    };
  default: {
    return state;
  }
  }
};

export default userReducer;
