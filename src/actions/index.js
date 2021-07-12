export const SINGIN = 'SINGIN';
export function login(usuario) {
  return {
    type: SINGIN,
    email: usuario,
  };
}
