export const userLogin = (email) => ({
  type: 'USER_LOGIN',
  email,
});

export default { userLogin };

// export const REQUEST_API = 'REQUEST_API';
// export const REQUEST_API_SUCESS = 'REQUEST_API_SUCESS';
// export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';

// const requestApi = (payload) => ({
//   type: 'REQUEST_API',
//   payload,
// });

// const requestSucessApi = (payload) => ({
//   type: 'REQUEST_API_SUCESS',
//   payload,
// });

// const requestErrorApi = (payload) => ({
//   type: 'REQUEST_API_ERROR',
//   payload,
// });

// const API = 'https://economia.awesomeapi.com.br/json/all';
// export const fecthApi = () => (dispatch) => {
//   dispatch(requestApi());
//   return fetch(API)
//     .then((result) => result.json())
//     .then((data) => dispatch(requestSucessApi(data)))
//     .catch((error) => dispatch(requestErrorApi(error)));
// };
