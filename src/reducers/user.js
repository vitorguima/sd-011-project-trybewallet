// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
  dunha: 'Quem é o dunha?',
};
function handleDunhaEvent(state) {
  return { ...state, dunha: 'Aquele que rasgou seu cu com a unha' };
}

function handleLoginEmail(state, action) {
  const { user } = state;
  user.email = action.email;
  return { ...state, user };
}

function handlePasswordEmail(state, action) {
  const { user } = state;
  user.password = action.password;
  return { ...state, user };
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'DUNHA':
    return handleDunhaEvent(state);
  case 'LOGIN_EMAIL':
    return handleLoginEmail(state, action);
  case 'LOGIN_PASSWORD':
    return handlePasswordEmail(state, action);
  default:
    return state;
  }
}
