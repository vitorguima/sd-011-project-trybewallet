export default (
  INNITIAL_STATE = [{
    email: 'pedro@trybe-student.com',
    password: '123abc',
  }], action,
) => {
  switch (action.type) {
  case 'ADD_USER':
    return [...INNITIAL_STATE, {
      email: 'fernanda@trybe-student.com',
      password: 'abc123',
    }];
  default:
    return INNITIAL_STATE;
  }
};
