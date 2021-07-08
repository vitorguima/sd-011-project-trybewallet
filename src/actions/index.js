function getEmail(email) {
  return {
    type: 'ADD_EMAIL',
    email,
  };
}

export default getEmail;

const requestSuccess = (moneyType) => {{
  type: REQUEST_COIN;

}}

const fetchApi = ()=> async (dispatch) => {
  dispatch(requestSuccess());
  
  const client = await fetch('https://economia.awesomeapi.com.br/json/all.');
  const response = await client.json();
  return response;
};

export default fetchApi;