// Coloque aqui suas actions
const ADD_EMAIL = 'ADD_EMAIL';

export function addEmail(payload) {
  return {
    type: ADD_EMAIL,
    payload,
  };
}

export function addWallet(payload) {
  return payload;
}
