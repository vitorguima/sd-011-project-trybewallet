// Coloque aqui suas actions
export const EMAIL = 'EMAIL';

export function emailToWallet(email) {
  return {
    type: EMAIL,
    email,
  };
}
