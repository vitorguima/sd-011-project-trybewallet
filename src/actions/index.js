export default function userAction(email) {
  return ({
    type: 'INPUT_USER',
    email,
  });
}
