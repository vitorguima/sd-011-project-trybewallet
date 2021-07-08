const INITIAL_STATE = {
  email: ''
}

function user(state = INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case 'SAVE_EMAIL':
      return {
        ...state,
        email: payload
      }
    default:
      return state
  }
}

export default user;