// Coloque aqui suas actions
function sendLogin(inputEmail) {
  return {
    type: 'LOGIN',
    inputEmail,
  };
}

export default sendLogin;
