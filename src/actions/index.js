export default function userAction(email, senha) {
  return ({
    type: 'INPUT_USER',
    email,
    senha,
  });
}
