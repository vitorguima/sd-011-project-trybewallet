export const SET_USER = 'SET_USER';
export const SET_WALLET = 'SET_WALLET';

export const setUser = (email) => ({ type: SET_USER, email });
export const setWallet = (payload) => ({ type: SET_WALLET, payload });
