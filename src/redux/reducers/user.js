import {
	UPDATE_FIRST_NAME,
	UPDATE_LAST_NAME,
	UPDATE_NICK_NAME,
	UPDATE_EMAIL,
	UPDATE_PASSWORD,
	UPDATE_REPEAT_PASSWORD,
} from '../actionTypes';

const initialState = {
	firstName: '',
	lastName: '',
	nickName: '',
	email: '',
	password: '',
	repeatPassword: '',
};

const additionalInfo = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_FIRST_NAME: {
			const { firstName } = action.payload;
			return {
				...state,
				firstName: firstName,
			};
		}
		case UPDATE_LAST_NAME: {
			const { lastName } = action.payload;
			return {
				...state,
				lastName: lastName,
			};
		}
		case UPDATE_NICK_NAME: {
			const { nickName } = action.payload;
			return {
				...state,
				nickName: nickName,
			};
		}
		case UPDATE_EMAIL: {
			const { email } = action.payload;
			return {
				...state,
				email: email,
			};
		}
		case UPDATE_PASSWORD: {
			const { password } = action.payload;
			return {
				...state,
				password: password,
			};
		}
		case UPDATE_REPEAT_PASSWORD: {
			const { repeatPassword } = action.payload;
			return {
				...state,
				repeatPassword: repeatPassword,
			};
		}
		default:
			return state;
	}
};

export default additionalInfo;
