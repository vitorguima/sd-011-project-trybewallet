import history from '../history';

export const SEND_SUBMIT = 'SEND_SUBMIT';

export function handleLogin(email) {
  history.push('/carteira');
  return { type: SEND_SUBMIT, payload: email };
}
