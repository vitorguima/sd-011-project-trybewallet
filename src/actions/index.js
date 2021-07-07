export const SET_EMAIL = 'SET_EMAIL';

export const emailAction = (email) => {
	return {
		type: SET_EMAIL,
		email,
	}
}
