export const EMAIL = 'Email';

export function login(email) {
  return {
    type: EMAIL,
    email,
  };
}
